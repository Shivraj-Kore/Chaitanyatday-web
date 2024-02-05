from rest_framework import serializers
from .models import InfoMessage

class InfoMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = InfoMessage
        fields = "__all__"