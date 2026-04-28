sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
    
], (Controller,MessageToast,JSONModel) => {
    "use strict";

    return Controller.extend("project1.controller.View1", {
        onInit() {
            // sap.m.MessageToast.show("welcome ui5 course");
            //below code will call northwind odata srv
            var omodel= this.getOwnerComponent().getModel();
            debugger;
            omodel.read('/Products',{
                success : (odata)=> {
                    debugger;
                    var json1= new sap.ui.model.json.JSONModel();
                    json1.setData(odata.results);
                    this.getView().setModel(json1,'prod');
            },
            error :(err)=>{
                debugger;
            }

            });

            var emprecord={
                "empname" : "Isha",
                "country" : "India"

            };
            var json2= new JSONModel();
            json2.setData(emprecord);
            this.getView().setModel(json2,'emp');
            //property bining
            this.byId("id1").bindProperty('text','emp>/empname');
            this.byId("_IDGenInput").bindProperty('value','emp>/country');

     },
     greetme :function(){
        sap.m.MessageToast.show("this is user defined function");

     }
    });
});