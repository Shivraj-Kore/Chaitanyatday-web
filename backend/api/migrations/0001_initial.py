# Generated by Django 4.2 on 2024-01-30 21:57

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='InfoMessage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=254)),
                ('contactnumber', models.CharField(max_length=10, validators=[django.core.validators.RegexValidator(code='invalid_number', message='Enter a valid 10-digit number', regex='^[0-9]{10}$')])),
                ('message', models.TextField(max_length=500)),
            ],
        ),
    ]