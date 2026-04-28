sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller,JSONModel) => {
    "use strict";

    return Controller.extend("project2.controller.View1", {
        onInit() {
            var omodel= this.getOwnerComponent().getModel();
           
            omodel.read('/Products',{
                success : (odata)=> {
                    
                    var json1= new sap.ui.model.json.JSONModel();
                    json1.setData(odata.results);
                    this.getView().setModel(json1,'prod');
            },
            error :(err)=>{
              
            }

            });
        }
    });
});