from rest_framework import serializers

# cart/serializers.py
from rest_framework import serializers
from .models import CartItem,Cart

class CartItemSerializer(serializers.ModelSerializer):
    product_name = serializers.ReadOnlyField(source='product.name')
    product_price = serializers.ReadOnlyField(source='product.price')
    product_image = serializers.ImageField(source='product.image', read_only=True)

    class Meta:
        model = CartItem
        fields = [
            'id',
            'product',
            'product_name',
            'product_price',
            'product_image',
            'quantity'
        ]


class CartSerializer(serializers.ModelSerializer):
    items = CartItemSerializer(many=True)

    class Meta:
        model = Cart
        fields = ['id', 'items']