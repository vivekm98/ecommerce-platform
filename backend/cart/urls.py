from django.urls import path
from . import views

urlpatterns = [
    path("cart/", views.CartView.as_view(), name="cart"),
    path("cart/items/", views.CartItemListView.as_view(), name="cart-items"),
    path("cart/items/add/", views.CartItemAddView.as_view(), name="cart-add"),
    path('cart/items/<int:pk>/', views.CartItemUpdateView.as_view(), name='cart-item-update'),
]