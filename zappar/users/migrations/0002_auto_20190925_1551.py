# Generated by Django 2.2.5 on 2019-09-25 14:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='zapparusers',
            options={'verbose_name': 'Zappar API users', 'verbose_name_plural': 'Zappar API users'},
        ),
        migrations.AddField(
            model_name='zapparusers',
            name='email',
            field=models.EmailField(default='email@example.com', max_length=255),
        ),
        migrations.AddField(
            model_name='zapparusers',
            name='title',
            field=models.CharField(default='male', max_length=255),
        ),
    ]
