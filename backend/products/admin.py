from django.contrib import admin
from .models import Category
from .models import Product
from .models import Subcategory
from .models import Add
# Register your models here.
admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Add)
admin.site.register(Subcategory)