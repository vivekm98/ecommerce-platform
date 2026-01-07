from django.urls import path
from .views import OrderCreateView, MyOrdersView

urlpatterns = [
    path("place-order/", OrderCreateView.as_view(), name="order-create"),
    path("orders/", MyOrdersView.as_view(), name="my-orders"),
]