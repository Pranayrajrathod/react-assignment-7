import React from 'react'

function Home() {
  return (
    <div style={{minHeight:'90vh'}} className='d-flex px-3 py-5 justify-around '>
      <div style={{width:'50%'}} className='text-white text-center  fs-1 bg-dark'>
          <img style={{width:'50%' ,height:'250px'}} className='text-center' src='../src/assets/home-1.jpg'></img>
          <p className='text-secondary fs-5 px-4 py-2 text-center'>
          Nature Environment and Pollution Technology is a peer-reviewed quarterly scientific journal dedicated to a wide range of environmental research. The journal is published in March, June, September, and December each year. Originally launched in 1994 under the title Journal of Environment & Pollution (ISSN: 0971-4871), it was rebranded as Nature Environment and Pollution Technology in 2002 with a new ISSN: 0972-6268 (Print). In 2017, the journal transitioned to a fully open-access online format, now identified by ISSN: 2395-3454 (Online). With a distinguished International Editorial Advisory Board, the journal upholds rigorous peer-review standards and is indexed in prestigious databases such as Scopus, Ulrich's, and several other renowned abstracting and indexing platforms
          </p>
      </div>
      <div style={{width:'50%'}} className='text-white text-center  fs-1 bg-dark'>
          <img style={{width:'50%' ,height:'250px'}} className='text-center' src='../src/assets/home-2.jpg'></img>
          <p className='text-secondary px-4 py-2 fs-5 text-center'>
          Nature Environment and Pollution Technology is a peer-reviewed quarterly scientific journal dedicated to a wide range of environmental research. The journal is published in March, June, September, and December each year. Originally launched in 1994 under the title Journal of Environment & Pollution (ISSN: 0971-4871), it was rebranded as Nature Environment and Pollution Technology in 2002 with a new ISSN: 0972-6268 (Print). In 2017, the journal transitioned to a fully open-access online format, now identified by ISSN: 2395-3454 (Online). With a distinguished International Editorial Advisory Board, the journal upholds rigorous peer-review standards and is indexed in prestigious databases such as Scopus, Ulrich's, and several other renowned abstracting and indexing platforms
          </p>
      </div>
    </div>
  )
}

export default Home