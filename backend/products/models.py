from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='category/', blank=True, null=True)

    def __str__(self):
        return self.name

class Subcategory(models.Model):
    parent = models.ForeignKey(Category,on_delete=models.CASCADE,related_name='subcategories')
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='category/', blank=True, null=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    category = models.ForeignKey(
        Category,
        related_name='products',
        on_delete=models.CASCADE
    )
    sub_category = models.ForeignKey(Subcategory,related_name='products',on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField(blank=True, null=True)
    stock = models.PositiveIntegerField()
    image = models.ImageField(upload_to='products/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
class Add(models.Model):
    name = models.CharField(max_length=20)
    image = models.ImageField(upload_to='adds/')
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        # If adding a new ad
        if not self.pk:
            ads_count = Add.objects.count()
            if ads_count >= 5:
                # delete oldest ads to keep only 4, then add new one
                excess = ads_count - 4
                oldest_ads = Add.objects.order_by('created_at')[:excess]
                for ad in oldest_ads:
                    ad.delete()

        super().save(*args, **kwargs)


