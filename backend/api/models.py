from django.db import models
from django.core import validators


class InfoMessage(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    contactnumber = models.CharField(max_length=10, validators=[validators.RegexValidator(regex='^[0-9]{10}$', message='Enter a valid 10-digit number', code='invalid_number')])
    message = models.TextField(max_length=500)

    def __str__(self):
        return self.name
