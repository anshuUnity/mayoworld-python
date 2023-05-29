from django.shortcuts import render

# Create your views here.
def designInvoice(request):
    return render(request, "design_invoice.html")
