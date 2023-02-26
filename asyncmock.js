export const data = [
    {
      id: 1,
      title: 'Primer Item',
      completed: false,
      status: 'pending'
    },
    {
      id: 2,
      title: 'Segundo Item',
      completed: true,
      status: 'completed'
    },
    {
      id: 3,
      title: 'Tercer Item',
      completed: false,
      status: 'pending'
    },
  ];




  export const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 50)
    })
  }

  

