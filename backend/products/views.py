from django.shortcuts import render
from .serializers import CategorySerializer,ProductSerializer,AddSerializer,SubCategorySerializer
from .models import Category,Product,Add,Subcategory
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter
# Create your views here.

class CategoryView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class SubCategoryView(generics.ListAPIView):
    queryset = Subcategory.objects.all()
    serializer_class = SubCategorySerializer

class ProductView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter]
    filterset_fields = ['category','sub_category']
    search_fields = ['name']

class AddView(generics.ListAPIView):
    queryset = Add.objects.all()
    serializer_class = AddSerializer

