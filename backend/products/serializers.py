from rest_framework import serializers
from .models import Category
from .models import Product
from .models import Add
from .models import Subcategory

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"

class SubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Subcategory
        fields = "__all__"

    
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"

class AddSerializer(serializers.ModelSerializer):
    class Meta:
        model = Add
        fields = '__all__'