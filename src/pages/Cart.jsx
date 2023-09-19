import { Table } from 'antd';
import { useState } from 'react';
import Button from '../components/Buttons/Button';
import Footer from '../components/Footer';


function Cart(){

    const columns = [
        {
          title: 'Product',
          dataIndex: 'product',
          render:(text, record)=> (
              <div className='flex text-xs'>
                  <img src={record.avatar} alt="order" style={{marginRight: 8, width:30, height:30}} />
                  {text}
              </div>
          )
        },
        {
          title: 'Price',
          dataIndex: 'price',
          sorter: {
            compare: (a, b) => a.price - b.price,
            multiple: 3,
          },
        },
        {
          title: 'Quantity',
          dataIndex: 'quantity',
          render:(text, record)=>(
              <input 
                  type="number"
                  value={text}
                  onChange={(e) => handleQuantityChange(record, e)}
                  min={1}  
                  className='w-16 border-2 border-black p-2'/>
          ),
          sorter: {
            compare: (a, b) => a.quantity - b.quantity,
            multiple: 2,
          },
        },
        {
          title: 'Subtotal',
          dataIndex: 'subtotal',
          sorter: {
            compare: (a, b) => a.subtotal - b.subtotal,
            multiple: 1,
          },
        },
      ];
      const initialData = [
          {
            key: '1',
            product: 'MacBook',
            avatar: 'https://cdn.pixabay.com/photo/2016/10/15/13/40/laptop-1742462_640.jpg', // Replace with the actual image path
            price: 98,
            quantity: 0,
            subtotal: 0,
          },
          {
            key: '2',
            product: 'Flower',
            avatar: 'https://cdn.pixabay.com/photo/2015/06/25/19/08/roses-821705_640.jpg', // Replace with the actual image path
            price: 8,
            quantity: 0,
            subtotal: 0,
          },
          
        ];
      const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
      };

    const [data, setData] = useState(initialData);

  const handleQuantityChange = (record, event) => {
    const newQuantity = parseInt(event.target.value, 10);

    // Update the data array with the new quantity
    const updatedData = data.map((item) => {
      if (item.key === record.key) {
        return {
          ...item,
          quantity: newQuantity,
          subtotal: newQuantity * item.price, // Calculate the subtotal
        };
      }
      return item;
    });

    setData(updatedData);
  };

    return(
        <>
        <div className='p-24 mt-10'>
        <Table columns={columns} dataSource={data} onChange={onChange} />
        <div className='flex justify-between'>
            <Button customClassName="bg-white rounded-sm border-2" >
                <h2 className='text-black'>Return to shop</h2>
            </Button>
            <Button customClassName="bg-white rounded-sm border-2" >
                <h2 className='text-black'>Update Cart</h2>
            </Button>
        </div>
        <div className='flex justify-between mt-8'>
            <div className='flex '>
            <input 
                type='text' 
                placeholder='Coupon code'
                className='border-2 h-12 p-2 border-black rounded-sm mr-3' />
                <Button customClassName="rounded-sm h-12" >
                <h2 className='t'>Apply Coupon</h2>
            </Button>
            </div>

            <div className='border-2 border-gray-500 p-2 items-end w-2/6'>
                <p className='text-left font-bold text-lg'>Cart Total</p>
                <div className='flex text-xs font-semibold text-gray-700 justify-between p-4'  >
                    <p>Subtotal:</p>
                    <p>$1750</p>
                </div>
                <div className='border-2 border-gray-300 mx-2'/>
                <div className='flex text-xs font-semibold text-gray-700 justify-between p-4'  >
                    <p>Shipping:</p>
                    <p>Free</p>
                </div>
                <div className='border-2 border-gray-300 mx-2'/>
                <div className='flex text-xs font-semibold justify-between p-4'  >
                    <p>Total:</p>
                    <p>$1750</p>
                </div>
                <Button customClassName="rounded-sm h-12" >
                <h2 className='font-medium'>Procceed to checkout</h2>
            </Button>

            </div>
           
           
        </div>

        </div>
        <Footer/>
        </>
    )
}
export default Cart;