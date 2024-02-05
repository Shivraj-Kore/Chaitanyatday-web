from django.urls import path , include
from . import views

urlpatterns = [
    path('api',views.apiOverview , name ="api-overview"),
    path('infomessage-list',views.infoMessageList , name ="infomessage-list"),
    path('infomessage-create',views.infoMessageCreate , name ="infomessage-create"),
]
