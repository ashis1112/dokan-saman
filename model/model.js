const mongo=require('mongoose')

const itemsschema=mongo.Schema({
    deo:{
        rak:{type:String},
        range:{type:String}
    },
    foundation:{
        rak:{type:String},
        range:{type:String}
    },
    eyeliner:{
        rak:{type:String},
        range:{type:String}
    },
    eyeshadow:{
        rak:{type:String},
        range:{type:String}
    },
    conceler:{
        rak:{type:String},
        range:{type:String}
    },
    fixer:{
        rak:{type:String},
        range:{type:String}
    },
    primer:{
        rak:{type:String},
        range:{type:String}
    },
    golapjol:{
        rak:{type:String},
        range:{type:String}
    },
    babypowder:{
        rak:{type:String},
        range:{type:String}
    },
    sindur:{
            liq:{
                    rak:{type:String},
                    range:{type:String}
            },
            guro:{
                    rak:{type:String},
                    range:{type:String}
            }
            
        
    },
    nailremover:{
        rak:{type:String},
        range:{type:String}
    }
})

module.exports=Items=mongo.model('items',itemsschema)
