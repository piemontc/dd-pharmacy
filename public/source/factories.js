app.factory('Promos', function(){
   
    return {
        promo1:
            {
                name: "$3.99 Rx Plan",
                details: [
                    "No insurance required",
                    "30 supply prescription drugs",
                    "Drugs from well-know manufacturers",
                    "Generics (list is available in-store or at ddpharmacycharlotte.com)",
                ]
            },
        promo2:
            {
                name: "$25 for Rx Transfer",
                details: [
                    "New patients only"
                ]
            }
    }
    
});

app.factory('Services', function() {
   
    return {
        service1:
            {
                name: "Immunizations",
                icon: "fas fa-syringe",
                details: [
                    "Service by walk-in & appointment",
                    "Travel vaccines for safer and more fun trip",
                    "Immunization records",
                    "Flu clinics",
                ]
            },
        service2:
            {
                name: "Health Screening",
                icon: "fas fa-briefcase-medical",
                details: [
                    "Blood pressure & blood sugar check with counseling",
                    "Medication review"
                ]
            },
        service3:
            {
                name: "Free Delivery",
                icon: "fas fa-people-carry",
                details: [
                    "Within X miles"
                ]
            },
        service4:
            {
                name: "Curbside Service",
                icon: "fas fa-car",
                details: [
                    "Don't leave the comfort of your car as your items are brought to you"
                ]
            }
    }
    
});