from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import InfoMessage
from .serializers import InfoMessageSerializer

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'List':'/task-list',
        'Create':'/task-create',
    }
    return Response(api_urls)

@api_view(['GET'])
def infoMessageList(request):
    infomessage= InfoMessage.objects.all()
    serializer = InfoMessageSerializer(infomessage , many=True)
    return Response(serializer.data)

@api_view(['POST'])
def infoMessageCreate(request):
    print(request.data)
    serializer = InfoMessageSerializer(data=request.data)
    
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    
    return Response(serializer.errors,status=400)