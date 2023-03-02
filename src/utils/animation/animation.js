 export const imgAnimation = {
    hidden: {

        opacity: 0,
        scale: 0.9

    },
    visible: (custom) => ({

        opacity: 1,
        transition: {delay: custom * 0.1},
        scale: 1

    })
}


 export const animation = {
     hidden: {
         y: 50,
         opacity: 0,

     },
     visible: (custom) => ({
         y: 0,
         opacity: 1,
         transition: {delay: custom * 0.1},

     })
 }


