from rest_framework import serializers
from leads.models import Lead

#Create a serializer file
class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = '__all__' #all the fields from the model.