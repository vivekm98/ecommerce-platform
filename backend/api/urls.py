from django.urls import path,include
from accounts import views as userViews
from rest_framework_simplejwt.views import(
    TokenObtainPairView,
    TokenRefreshView
)
urlpatterns = [
    path('register/',userViews.RegisterView.as_view(),name="register"),
    path('token/',TokenObtainPairView.as_view(),name="token"),
    path('token/refresh/',TokenRefreshView.as_view(),name="token_refresh"),
    path('protected-view/',userViews.ProtectedView.as_view()),
    path('',include('products.urls')),
    path('',include('cart.urls')),

]