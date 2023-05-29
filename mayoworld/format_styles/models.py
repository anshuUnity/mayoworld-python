from django.db import models

# Create your models here.
class InvoiceTemplate(models.Model):
    template_name = models.CharField(max_length=50, blank=False, null=False)

class InvoiceFieldDesign(models.Model):
    template = models.ForeignKey(InvoiceTemplate, on_delete=models.CASCADE)
    field_id = models.CharField(max_length=100, blank=True, null=True)
    field_xPosition = models.CharField(max_length=50, blank=True, null=True)
    field_yPosition = models.CharField(max_length=50, blank=True, null=True)
    field_header_color = models.CharField(max_length=50, blank=True, null=True)

