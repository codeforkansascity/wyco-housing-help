from lots.models import Lot
from rest_framework import viewsets, permissions
from .serializers import LotSerializer

#Lot viewset
class LotViewSet(viewsets.ModelViewSet):
    queryset = Lot.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = LotSerializer