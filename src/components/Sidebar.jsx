import React from 'react';
import { 
  Form, InputGroup, Stack, ToggleButton

} from 'react-bootstrap';
import '../components/sidebar.css'
import { IoMdArrowDropdown } from 'react-icons/io'
import { useState } from 'react'


function Sidebar(tools) {
  const [durValue, setDurValue] = useState('0')
  const [bedValue, setBedValue] = useState('0')
  const [bathValue, setBathValue] = useState('0')
  const [amneValue, setAmneValue] = useState('0')

  const dur = [
    { name: 'Day', value: '1'},
    { name: 'Month', value: '2'},
    { name: 'Year', value: '3'},
  ];

  const bed = [
    { name: '1', value: '1'},
    { name: '2', value: '2'},
    { name: '3', value: '3'},
    { name: '4', value: '4'},
    { name: '5+', value: '5+'},
  ];

  const bath = [
    { name: '1', value: '1'},
    { name: '2', value: '2'},
    { name: '3', value: '3'},
    { name: '4', value: '4'},
    { name: '5+', value: '5+'},
  ];

  const amne = [
    { name: 'Furnished', value: '1'},
    { name: 'Pet Allowed', value: '2'},
    { name: 'Shared Accomodation', value: '3'},
  ]

  return(
      // <div className='bg-white px-5 d-flex flex-column' style={{height: '100vh', width: 570}}>
      //   <div className='mb-3'>
      //     <h2 className='fw-bold'>Type Of Rent</h2>
      //   </div>
      //   <div className='d-flex justify-content-between mb-3'>
      //     <Button className='btn btn-lg px-5 py-2 fw-bold btn-custom'>Day</Button>
      //     <Button className='btn btn-lg px-5 py-2 fw-bold btn-custom'>Month</Button>
      //     <Button className='btn btn-lg px-5 py-2 fw-bold btn-custom'>Year</Button>
      //   </div>
      //   <div className='mb-3'>
      //     <h2 className='fw-bold'>Date</h2>
      //   </div>
      //   <InputGroup className='mb-3'>
      //     <input type='date' className='form-control'/>
      //     <InputGroup.Text>
      //       <IoMdArrowDropdown />
      //     </InputGroup.Text>
      //   </InputGroup>
      //   <div className='mb-2'>
      //     <h2 className='fw-bold'>Property Room</h2>
      //   </div>
      //   <div className='Bedroom'>
      //     <p className='text-gray'>Bedroom</p>
      //     <div className='col d-flex justify-content-between'>
      //       <button className='btn btn-custom btn-lg' style={{width: 80}}>1</button>
      //       <button className='btn btn-custom btn-lg' style={{width: 80}}>2</button>
      //       <button className='btn btn-custom btn-lg' style={{width: 80}}>3</button>
      //       <button className='btn btn-custom btn-lg' style={{width: 80}}>4</button>
      //       <button className='btn btn-custom btn-lg' style={{width: 80}}>5+</button>
      //     </div>
      //   </div>
      //   <div className='Bathroom'>
      //     <p className='text-gray'>Bathroom</p>
      //     <div className='col d-flex justify-content-between'>
      //       <button className='btn btn-custom btn-lg' style={{width: 80}}>1</button>
      //       <button className='btn btn-custom btn-lg' style={{width: 80}}>2</button>
      //       <button className='btn btn-custom btn-lg' style={{width: 80}}>3</button>
      //       <button className='btn btn-custom btn-lg' style={{width: 80}}>4</button>
      //       <button className='btn btn-custom btn-lg' style={{width: 80}}>5+</button>
      //     </div>
      //   </div>
      // </div>
      <>
        <aside className="bg-white px-5" style={{width: 640, height: '100vh'}}>
          <Form>
            <Stack gap={4}>
              <div>
                <div className='type-rent'>
                <h4 className='mb-3 fw-bold'>
                  Type of Rent
                </h4>
                  <div className='d-flex mb-3 gap-5'>
                    {dur.map((dur, id) => (
                      <ToggleButton
                        key={id}
                        size='lg'
                        id={`dur-${id}`}
                        type='radio'
                        variant={durValue === dur.value ? 'primary' : 'secondary'}
                        name='dur'
                        value={dur.value}
                        checked={durValue === dur.value}
                        onChange={(e) => setDurValue(e.currentTarget.value)}
                        className='w-100'
                      >
                        {dur.name}
                      </ToggleButton>
                    ))}
                  </div>
                </div>
                <div className='date'>
                  <h4 className='mb-3 fw-bold'>Date</h4>
                  <InputGroup className='mb-3'>
                    <input type='date' className='form-control'/>
                    <InputGroup.Text>
                      <IoMdArrowDropdown />
                    </InputGroup.Text>
                  </InputGroup>
                </div>
                <div className='property-room'>
                  <h4 className='mb-3 fw-bold'>Property Room</h4>
                  <div className='bedroom'>
                    <p className="mb-3 fw-bold text-gray">Bedroom</p>
                    <div className='d-flex mb-3 gap-5'>
                    {bed.map((bed, id) => (
                      <ToggleButton
                        key={id}
                        size='lg'
                        id={`bed-${id}`}
                        type='radio'
                        variant={bedValue === bed.value ? 'primary' : 'secondary'}
                        name='dur'
                        value={bed.value}
                        checked={bedValue === bed.value}
                        onChange={(e) => setBedValue(e.currentTarget.value)}
                        className='w-100'
                      >
                        {bed.name}
                      </ToggleButton>
                    ))}
                    </div>
                  </div>
                  <div className='bathroom'>
                    <p className="mb-3 fw-bold text-gray">Bathroom</p>
                    <div className='d-flex mb-3 gap-5'>
                    {bath.map((bath, id) => (
                      <ToggleButton
                        key={id}
                        size='lg'
                        id={`bath-${id}`}
                        type='radio'
                        variant={bathValue === bath.value ? 'primary' : 'secondary'}
                        name='dur'
                        value={bath.value}
                        checked={bathValue === bath.value}
                        onChange={(e) => setBathValue(e.currentTarget.value)}
                        className='w-100'
                      >
                        {bath.name}
                      </ToggleButton>
                    ))}
                    </div>
                  </div>
                  <div className='amneties'>
                    <h4 className='mb-3 fw-bold'>Amneties</h4>
                    <div className="row">
                      {amne.map((amne, id) => (
                        <InputGroup className='d-flex justify-content-between mb-2'>
                          <label htmlFor={`amne-${id}`} className='fw-bold text-gray'>{amne.name}</label>
                          <input 
                          type="checkbox" 
                          className='form-check-input rounded-1'
                          id={`amne-${id}`}
                          checked={amneValue === amne.value}
                          name='amne'
                          value={amne.value}
                          onChange={(e) => setAmneValue(e.currentTarget.value)}
                          />
                        </InputGroup>
                      ))}
                    </div>
                  </div>
                  <div className='budget'>
                    <h4 className='mb-3 fw-bold'>Budget</h4>
                    <div className='row'>
                      <InputGroup className='d-flex align-items-center'>
                        <label htmlFor='' className='me-3 fw-bold text-gray'>Less than IDR.</label>
                        <input type="search" className='form-control rounded-3'/>
                      </InputGroup>
                    </div>
                  </div>
                  <div className='d-flex justify-content-end mt-5 mb-5'>
                    <button className='btn btn-lg btn-custom'>Apply</button>
                  </div>
                </div>
              </div>
            </Stack>
          </Form>
        </aside>
      </>
  )
}

export default Sidebar;