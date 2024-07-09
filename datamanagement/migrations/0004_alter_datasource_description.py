# Generated by Django 3.2.18 on 2024-05-17 06:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('datamanagement', '0003_auto_20190531_1922'),
    ]

    operations = [
        migrations.AlterField(
            model_name='datasource',
            name='description',
            field=models.TextField(blank=True, help_text='Enter a brief description of the resource', max_length=1000),
        ),
    ]
