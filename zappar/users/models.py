from django.db import models
from django.utils.translation import ugettext_lazy as _

# Create your models here.
class ZapparUsers(models.Model):
    class Meta:
        db_table = 'zappar_users'
        verbose_name = 'Zappar API users'
        verbose_name_plural = 'Zappar API users'

    
    gender = models.CharField(
        max_length=255,
        blank=False,
        null=False,
        default=_('male'),
    )
    title = models.CharField(
        max_length=255,
        blank=False,
        null=False,
        default=_('mr'),
    )
    fname = models.CharField(
        max_length=255,
        blank=False,
        null=False,
        default=_('John'),
    )
    lname = models.CharField(
        max_length=255,
        blank=False,
        null=False,
        default=_('Doe')
    )
    phone = models.CharField(
        max_length=255,
        blank=False,
        null=False,
        default=_('+4411 2358 13 21')
    )
    email = models.EmailField(
        max_length=255,
        blank= False,
        null = False,
        default = _('email@example.com')
    )
    def __str__(self):
        return self.fname