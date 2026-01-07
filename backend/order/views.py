from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.db import transaction
from rest_framework.views import APIView
from .models import Order, OrderItem
from .serializers import OrderSerializer
from cart.models import CartItem


class OrderCreateView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        cart_item_ids = request.data.get("cart_items", [])

        if not cart_item_ids:
            return Response(
                {"detail": "No cart items selected"},
                status=status.HTTP_400_BAD_REQUEST
            )

        # 1️⃣ Create order FIRST with total_amount=0
        order = Order.objects.create(
            user=request.user,
            name=request.data.get("name"),
            phone=request.data.get("phone"),
            address=request.data.get("address"),
            city=request.data.get("city"),
            pincode=request.data.get("pincode"),
            total_amount=0,   # ✅ IMPORTANT
        )

        total = 0

        # 2️⃣ Create order items
        cart_items = CartItem.objects.filter(
            id__in=cart_item_ids,
            cart__user=request.user
        )

        for item in cart_items:
            OrderItem.objects.create(
                order=order,
                product=item.product,
                quantity=item.quantity,
                price=item.product.price
            )

            total += item.product.price * item.quantity

        # 3️⃣ Update total amount
        order.total_amount = total
        order.save()

        # 4️⃣ Remove ordered items from cart
        cart_items.delete()

        serializer = OrderSerializer(order)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class MyOrdersView(generics.ListAPIView):
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Order.objects.filter(user=self.request.user).order_by("-created_at")
