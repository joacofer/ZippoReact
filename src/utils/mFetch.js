let productos = [
   {
      id:'1',
      nombre:"Cierre",
      precio:105,
      img:"../../public/zipo4.png",
      cantidad:1,
      categoria: "moderno",
      descripcion:"El encendedor viene sin llenar.Para obtener un rendimiento óptimo, le recomendamos utilizar piedras y mechas marca Zippo"
   },
   {
      id:'2',
      nombre:"Jack",
      precio:165,
      img:"../../public/zipo1.png",
      cantidad:1,
      categoria: "clasico",
      descripcion:"El encendedor viene sin llenar.Para obtener un rendimiento óptimo, le recomendamos utilizar piedras y mechas marca Zippo"
   },   
   {
       id:'3',
       nombre:"Harley",
       precio:170,
       img:"../../public/zipo5.png",
       cantidad:1,
       categoria: "clasico",
       descripcion:"El encendedor viene sin llenar.Para obtener un rendimiento óptimo, le recomendamos utilizar piedras y mechas marca Zippo"
    },
    {
       id:'4',
       nombre:"Stolen",
       precio:135,
       img:"../../public/zipo6.png",
       cantidad:1,
       categoria: "moderno",
       descripcion:"El encendedor viene sin llenar.Para obtener un rendimiento óptimo, le recomendamos utilizar piedras y mechas marca Zippo"
    },
    {
       id:'5',
       nombre:"Violet",
       precio:115,
       img:"/zipo7.png",
       cantidad:1,
       categoria: "moderno",
       descripcion:"El encendedor viene sin llenar.Para obtener un rendimiento óptimo, le recomendamos utilizar piedras y mechas marca Zippo"
    },
    {
       id:'6',
       nombre:"Tigger",
       precio:100,
       img:"../../public/zipo8.png",
       cantidad:1,
       categoria: "moderno",
       descripcion:"El encendedor viene sin llenar.Para obtener un rendimiento óptimo, le recomendamos utilizar piedras y mechas marca Zippo"
    },
    {
       id:'7',
       nombre:"Trebol",
       precio:145,
       img:"../../public/zipo9.png",
       cantidad:1,
       categoria: "clasico",
       descripcion:"El encendedor viene sin llenar.Para obtener un rendimiento óptimo, le recomendamos utilizar piedras y mechas marca Zippo"
    },
    {
       id:'8',
       nombre:"Camaro",
       precio:190,
       img:"../../public/zipo10.png",
       cantidad:1,
       categoria: "moderno",
       descripcion:"El encendedor viene sin llenar.Para obtener un rendimiento óptimo, le recomendamos utilizar piedras y mechas marca Zippo"
    },
    {
       id:'9',
       nombre:"Enanitos",
       precio:160,
       img:"../../public/zipo11.png",
       cantidad:1,
       categoria: "moderno",
       descripcion:"El encendedor viene sin llenar.Para obtener un rendimiento óptimo, le recomendamos utilizar piedras y mechas marca Zippo"
    },
    {
       id:'10',
       nombre:"Red Dragon",
       precio:185,
       img:"../../public/zipo12.png",
       cantidad:1,
       categoria: "moderno",
       descripcion:"El encendedor viene sin llenar.Para obtener un rendimiento óptimo, le recomendamos utilizar piedras y mechas marca Zippo"
    },

    {
       id:'11',
       nombre:"Fumin",
       precio:95,
       img:"../../public/zipo14.png",
       cantidad:1,
       categoria: "moderno",
       descripcion:"El encendedor viene sin llenar.Para obtener un rendimiento óptimo, le recomendamos utilizar piedras y mechas marca Zippo"
    },
    {
       id:'12',
       nombre:"Mountain",
       precio:150,
       img:"../../public/zipo15.png",
       cantidad:1,
       categoria: "moderno",
       descripcion:"El encendedor viene sin llenar.Para obtener un rendimiento óptimo, le recomendamos utilizar piedras y mechas marca Zippo"
    },
    {
       id:'13',
       nombre:"Corvette",
       precio:160,
       img:"../../public/zipo16.png",
       cantidad:1,
       categoria: "moderno",
       descripcion:"El encendedor viene sin llenar.Para obtener un rendimiento óptimo, le recomendamos utilizar piedras y mechas marca Zippo"
    },
    {
       id:'14',
       nombre:"Hendrix",
       precio:125,
       img:"../../public/zipo17.png",
       cantidad:1,
       categoria: "moderno",
       descripcion:"El encendedor viene sin llenar.Para obtener un rendimiento óptimo, le recomendamos utilizar piedras y mechas marca Zippo"
    },
    {
       id:'15',
       nombre:"Watch Dogs",
       precio:155,
       img:"../../public/zipo19.png",
       cantidad:1,
       categoria: "moderno",
       descripcion:"El encendedor viene sin llenar.Para obtener un rendimiento óptimo, le recomendamos utilizar piedras y mechas marca Zippo"
    },
    {
       id:'16',
       nombre:"Play Boy",
       precio:170,
       img:"../../public/zipo20.png",
       cantidad:1,
       categoria: "clasico",
       descripcion:"El encendedor viene sin llenar.Para obtener un rendimiento óptimo, le recomendamos utilizar piedras y mechas marca Zippo"
    },
    {
       id:'17',
       nombre:"007",
       precio:170,
       img:"../../public/zipo21.png",
       cantidad:1,
       categoria: "moderno",
       descripcion:"El encendedor viene sin llenar.Para obtener un rendimiento óptimo, le recomendamos utilizar piedras y mechas marca Zippo"
    },
    {
       id:'18',
       nombre:"Maching",
       precio:200,
       img:"../../public/zipo22.png",
       cantidad:1,
       categoria: "moderno",
       descripcion:"El encendedor viene sin llenar.Para obtener un rendimiento óptimo, le recomendamos utilizar piedras y mechas marca Zippo"
    },
    {
       id:'19',
       nombre:"Graff",
       precio:155,
       img:"../../public/zipo23.png",
       cantidad:1,
       categoria: "moderno",
       descripcion:"El encendedor viene sin llenar.Para obtener un rendimiento óptimo, le recomendamos utilizar piedras y mechas marca Zippo"
    },
    {
       id:'20',
       nombre:"Calabera",
       precio:185,
       img:"../../public/zipo24.png",
       cantidad:1,
       categoria: "moderno",
       descripcion:"El encendedor viene sin llenar.Para obtener un rendimiento óptimo, le recomendamos utilizar piedras y mechas marca Zippo"
    }
]

export const mFetch = (id) => {
    return new Promise((res,rej)=>{
      setTimeout(()=>{
        res(!id?  productos : productos.find( productos => productos.id === id))
      },1000)
    })
}



