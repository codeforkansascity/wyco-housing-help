from rest_framework import serializers
from lots.models import Lot

#Lot serializer
class LotSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lot
        fields = '__all__'