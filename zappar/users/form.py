from django import forms

GENDERS = (
    ('male', 'Male'),
    ('female', 'Female')
)
RESULTS = (
    (1,'1'),
    (2,'2'),
    (3,'3'),
    (5,'5'),
    (8,'8'),
)
NAT = (
    ('AU','AU'), 
    ('BR','BR'), 
    ('CA','CA'), 
    ('CH','CH'), 
    ('DE','DE'), 
    ('DK','DK'), 
    ('ES','ES'), 
    ('FI','FI'), 
    ('FR','FR'), 
    ('GB','GB'), 
    ('IE','IE'), 
    ('IR','IR'), 
    ('NO','NO'), 
    ('NL','NL'), 
    ('NZ','NZ'), 
    ('TR','TR'), 
    ('US','US')
)
class UsersForm(forms.Form):
    gender = forms.ChoiceField(widget=forms.Select(attrs={'class':'form-control', 'id':'gender'}), choices = GENDERS, label='Gender') 
    results = forms.ChoiceField(widget=forms.Select(attrs={'class':'form-control', 'id':'results'}), choices = RESULTS, label='Number of results' ) 
    nationality = forms.ChoiceField(widget=forms.Select(attrs={'class':'form-control', 'id':'nationality'}), choices = NAT, label='Nationality') 