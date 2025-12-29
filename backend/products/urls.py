from django.urls import path,include
from . import views
urlpatterns = [
   path('category/',views.CategoryView.as_view(),name="category"),
   path('products/',views.ProductView.as_view(),name="products"),
   path('ads/',views.AddView.as_view(),name="ads"),
   path('sub_category/',views.SubCategoryView.as_view(),name="sub_category")

]