import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Ensure you import the CSS

function App() {
  return (
    <>
      <Navbar />
      {/* <Carousel
        className="w-full relative shadow-md"
        showArrows={false}
        showThumbs={false}
        swipeable={true}
        autoPlay={true}
        infiniteLoop={true}
        emulateTouch={true}
        showStatus={false}
        interval={2000}
      // renderIndicator={()=>{}}
      >
        <div className="h-[60vh] w-full">
          <img className="h-full object-cover w-full select-none" src={"https://wallpapers.com/images/featured/restaurant-background-2ez77umko2vj5w02.jpg"} alt="cover" />
        </div>
        <div className="h-[60vh] w-full">
          <img className="h-full object-cover w-full select-none" src={"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/64/1a/cb/hotel-paragon-restaurant.jpg?w=600&h=400&s=1"} alt="cover" />
        </div>
        <div className="h-[60vh] w-full">
          <img className="h-full object-cover w-full select-none" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnRhaSm60sa2CYcazq9JJ_WBFmeaAKGTozukqBl7qCTsBAygNV2zKIxlVYtO4TKAGAqh4&usqp=CAU"} alt="cover" />
        </div>
        <div className="h-[60vh] w-full">
          <img className="h-full object-cover w-full select-none" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQRi34qZE3KQnWoc0G33LWWXwn0v9mTs0Qeg&s"} alt="cover" />
        </div>
        <div className="h-[60vh] w-full">
          <img className="h-full object-cover w-full select-none" src={"https://www.posist.com/restaurant-times/wp-content/uploads/2016/03/Zambar-Gurgaon.jpg"} alt="cover" />
        </div>
      </Carousel> */}
      <div className="bg-[#010632] text-white pt-28 pb-36 homesec">
        {/* Home hero */}
        <div className="flex items-center justify-between px-16">
          <div className='w-1/2'>
            <h1 className='text-7xl font-playfair'>Healthy and Tasty meals for <span className='text-red-500'>healthi living</span></h1>
            <p className='py-7 text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nulla et dicta cupiditate aspernatur quam fugiat. Quibusdam soluta nemo ut iste, magni dignissimos placeat rerum asperiores odio.</p>
            <button type="button" className='py-2.5 px-7 text-lg bg-[#F01543] rounded'>Get Offer!</button>
            <button type="button" className='py-2.5 px-7 text-lg bg-[#F01543] rounded ms-4'>Contact Us</button>
          </div>
          <img className='-scale-x-100' src="./pizza1.png" width={500} alt="" />
        </div>
      </div>
      {/* Gradient area */}
      <div className="gradient-bg px-16">
        {/* Cards */}
        {/* <div className='flex py-20 gap-3 px-20'>
          <div className='w-1/4 p-4 flex items-center bg-gray-50 shadow rounded-md border'>
            <div className="shadow p-3.5 border rounded-md">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" style={{ fill: "rgba(10, 10, 10, .8)" }}><path d="M21 10H3a1 1 0 0 0-1 1 10 10 0 0 0 5 8.66V21a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.34A10 10 0 0 0 22 11a1 1 0 0 0-1-1zm-5.45 8.16a1 1 0 0 0-.55.9V20H9v-.94a1 1 0 0 0-.55-.9A8 8 0 0 1 4.06 12h15.88a8 8 0 0 1-4.39 6.16zM9 9V7.93a4.53 4.53 0 0 0-1.28-3.15A2.49 2.49 0 0 1 7 3V2H5v1a4.53 4.53 0 0 0 1.28 3.17A2.49 2.49 0 0 1 7 7.93V9zm4 0V7.93a4.53 4.53 0 0 0-1.28-3.15A2.49 2.49 0 0 1 11 3V2H9v1a4.53 4.53 0 0 0 1.28 3.15A2.49 2.49 0 0 1 11 7.93V9zm4 0V7.93a4.53 4.53 0 0 0-1.28-3.15A2.49 2.49 0 0 1 15 3V2h-2v1a4.53 4.53 0 0 0 1.28 3.15A2.49 2.49 0 0 1 15 7.93V9z"></path></svg></span>
            </div>
            <div className='ps-3'>
              <h5 className='font-playfair font-semibold'>Sandwitch</h5>
              <p className='flex items-center'><span className='me-1.5 h-1.5 w-1.5 rounded-full bg-[#F01543] block'></span>25 Items</p>
            </div>
          </div>
          <div className='w-1/4 p-4 flex items-center bg-gray-50 shadow rounded-md border'>
            <div className="shadow p-3.5 border rounded-md">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" style={{ fill: "rgba(10, 10, 10, .8)" }}><path d="M21 10H3a1 1 0 0 0-1 1 10 10 0 0 0 5 8.66V21a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.34A10 10 0 0 0 22 11a1 1 0 0 0-1-1zm-5.45 8.16a1 1 0 0 0-.55.9V20H9v-.94a1 1 0 0 0-.55-.9A8 8 0 0 1 4.06 12h15.88a8 8 0 0 1-4.39 6.16zM9 9V7.93a4.53 4.53 0 0 0-1.28-3.15A2.49 2.49 0 0 1 7 3V2H5v1a4.53 4.53 0 0 0 1.28 3.17A2.49 2.49 0 0 1 7 7.93V9zm4 0V7.93a4.53 4.53 0 0 0-1.28-3.15A2.49 2.49 0 0 1 11 3V2H9v1a4.53 4.53 0 0 0 1.28 3.15A2.49 2.49 0 0 1 11 7.93V9zm4 0V7.93a4.53 4.53 0 0 0-1.28-3.15A2.49 2.49 0 0 1 15 3V2h-2v1a4.53 4.53 0 0 0 1.28 3.15A2.49 2.49 0 0 1 15 7.93V9z"></path></svg></span>
            </div>
            <div className='ps-3'>
              <h5 className='font-playfair font-semibold'>Sandwitch</h5>
              <p className='flex items-center'><span className='me-1.5 h-1.5 w-1.5 rounded-full bg-[#F01543] block'></span>25 Items</p>
            </div>
          </div>
          <div className='w-1/4 p-4 flex items-center bg-gray-50 shadow rounded-md border'>
            <div className="shadow p-3.5 border rounded-md">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" style={{ fill: "rgba(10, 10, 10, .8)" }}><path d="M21 10H3a1 1 0 0 0-1 1 10 10 0 0 0 5 8.66V21a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.34A10 10 0 0 0 22 11a1 1 0 0 0-1-1zm-5.45 8.16a1 1 0 0 0-.55.9V20H9v-.94a1 1 0 0 0-.55-.9A8 8 0 0 1 4.06 12h15.88a8 8 0 0 1-4.39 6.16zM9 9V7.93a4.53 4.53 0 0 0-1.28-3.15A2.49 2.49 0 0 1 7 3V2H5v1a4.53 4.53 0 0 0 1.28 3.17A2.49 2.49 0 0 1 7 7.93V9zm4 0V7.93a4.53 4.53 0 0 0-1.28-3.15A2.49 2.49 0 0 1 11 3V2H9v1a4.53 4.53 0 0 0 1.28 3.15A2.49 2.49 0 0 1 11 7.93V9zm4 0V7.93a4.53 4.53 0 0 0-1.28-3.15A2.49 2.49 0 0 1 15 3V2h-2v1a4.53 4.53 0 0 0 1.28 3.15A2.49 2.49 0 0 1 15 7.93V9z"></path></svg></span>
            </div>
            <div className='ps-3'>
              <h5 className='font-playfair font-semibold'>Fries</h5>
              <p className='flex items-center'><span className='me-1.5 h-1.5 w-1.5 rounded-full bg-[#F01543] block'></span>25 Items</p>
            </div>
          </div>
          <div className='w-1/4 p-4 flex items-center bg-gray-50 shadow rounded-md border'>
            <div className="shadow p-3.5 border rounded-md">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" style={{ fill: "rgba(10, 10, 10, .8)" }}><path d="M21 10H3a1 1 0 0 0-1 1 10 10 0 0 0 5 8.66V21a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.34A10 10 0 0 0 22 11a1 1 0 0 0-1-1zm-5.45 8.16a1 1 0 0 0-.55.9V20H9v-.94a1 1 0 0 0-.55-.9A8 8 0 0 1 4.06 12h15.88a8 8 0 0 1-4.39 6.16zM9 9V7.93a4.53 4.53 0 0 0-1.28-3.15A2.49 2.49 0 0 1 7 3V2H5v1a4.53 4.53 0 0 0 1.28 3.17A2.49 2.49 0 0 1 7 7.93V9zm4 0V7.93a4.53 4.53 0 0 0-1.28-3.15A2.49 2.49 0 0 1 11 3V2H9v1a4.53 4.53 0 0 0 1.28 3.15A2.49 2.49 0 0 1 11 7.93V9zm4 0V7.93a4.53 4.53 0 0 0-1.28-3.15A2.49 2.49 0 0 1 15 3V2h-2v1a4.53 4.53 0 0 0 1.28 3.15A2.49 2.49 0 0 1 15 7.93V9z"></path></svg></span>
            </div>
            <div className='ps-3'>
              <h5 className='font-playfair font-semibold'>Shawarma</h5>
              <p className='flex items-center'><span className='me-1.5 h-1.5 w-1.5 rounded-full bg-[#F01543] block'></span>25 Items</p>
            </div>
          </div>
        </div> */}
        {/* About us */}
        <div className="flex items-center justify-between py-20">
          <img className='-scale-x-100' src="https://pngfile.net/download/bbPW45U2DUdrX1HEdkTUkhn5xfCiFQnLYxDIdsloGO9UveIwmfOwMGiWFU0Nqcc16pmt1vGVMY1gUfwwjTHp1oBBDAY1x3LmgNGbRZ8sL68zmYEec4XtPYpGmmg3umA0JV9uTN6e3GboOw8GXgjQOd6lrjALuBAmLKaq2BgMyETZ1JiWTygqwoOT1BpBa1pvhF3QIHyi/medium" width={480} alt="" />
          <div className='ps-12 pe-8'>
            <h2 className='flex items-center text-[#F01543] font-semibold font-playfair text-3xl pb-4'><span className='me-2 h-[2.9px] w-9 rounded-xl bg-[#F01543] block'></span>About us</h2>
            <h1 className='text-5xl font-semibold font-playfair text-slate-900'>We make the best burgers in your town</h1>
            <p className='py-5 text-gray-800'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum necessitatibus fuga, deleniti iure unde pariatur sit. Esse exercitationem iste, distinctio nemo aut incidunt sunt perspiciatis quae a ducimus? Est iure esse ab odio laborum, a repellat. Ipsa voluptate enim eius.</p>
            <ul className='pb-5 flex flex-col gap-1'>
              <li className='flex items-center font-semibold text-slate-800'><span className='me-1.5 h-2 w-2 rounded-full bg-[#F01543] block'></span>Lorem ipsum consectetur dolor sit amet.</li>
              <li className='flex items-center font-semibold text-slate-800'><span className='me-1.5 h-2 w-2 rounded-full bg-[#F01543] block'></span>Lorem consectetur ipsum dolor sit.</li>
              <li className='flex items-center font-semibold text-slate-800'><span className='me-1.5 h-2 w-2 rounded-full bg-[#F01543] block'></span>Lorem ipsum sit amet consectetur isicing.</li>
            </ul>
            <button type="button" className='py-2.5 px-7 text-lg bg-[#F01543] rounded text-white'>Read More</button>
          </div>
        </div>
        {/* Menu */}
        <div className="pt-14 pb-20">
          <h2 className='flex items-center justify-center text-[#F01543] font-semibold font-playfair text-3xl pb-4'><span className='me-2 h-[2.9px] w-9 rounded-xl bg-[#F01543] block'></span>Menu<span className='ms-2 h-[2.9px] w-9 rounded-xl bg-[#F01543] block'></span></h2>
          <h1 className='text-4xl font-semibold font-playfair text-slate-900 text-center'>Our Popular category</h1>
          <div className="flex justify-between py-14 gap-3">
            <div className="w-1/3 hover:border-[#F01543] transition-all border shadow rounded-xl bg-white overflow-hidden">
              <div className="w-full h-56">
                <img className='w-full h-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzUXwxKjDkf17YKakug9okRsOuGVhZD8h6RA&s" alt="" />
              </div>
              <div className="py-4 px-6">
                <div className="flex justify-between border-b pb-3">
                  <h4 className='font-bold text-slate-900'>$30.00</h4>
                  <h5 className='font-semibold text-amber-500 flex items-center'><span className='me-1'><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style={{ fill: "currentColor" }}><path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path></svg></span> 4.5(2.5k)</h5>
                </div>
                <div className="text-center pt-3">
                  <h4 className='text-2xl text-slate-800 font-playfair font-semibold'>Backed Chicken Pop</h4>
                  <p className='text-gray-600 py-2.5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nisi et maiores!</p>
                  <button type="button" className='py-2.5 w-full my-2 text-sm shadow-md border border-[#F01543] bg-[#F01543] rounded-md transition-all text-white'>Read More</button>
                </div>
              </div>
            </div>
            <div className="w-1/3 border border-[#F01548] shadow rounded-xl bg-white overflow-hidden">
              <div className="w-full h-56">
                <img className='w-full h-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzUXwxKjDkf17YKakug9okRsOuGVhZD8h6RA&s" alt="" />
              </div>
              <div className="py-4 px-6">
                <div className="flex justify-between border-b pb-3">
                  <h4 className='font-bold text-slate-900'>$30.00</h4>
                  <h5 className='font-semibold text-amber-500 flex items-center'><span className='me-1'><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style={{ fill: "currentColor" }}><path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path></svg></span> 4.5(2.5k)</h5>
                </div>
                <div className="text-center pt-3">
                  <h4 className='text-2xl text-slate-800 font-playfair font-semibold'>Backed Chicken Pop</h4>
                  <p className='text-gray-600 py-2.5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nisi et maiores!</p>
                  <button type="button" className='py-2.5 w-full my-2 text-sm shadow-md border border-[#F01543] bg-[#F01543] rounded-md transition-all text-white'>Read More</button>
                </div>
              </div>
            </div>
            <div className="w-1/3 border hover:border-[#F01543] transition-all shadow rounded-xl bg-white overflow-hidden">
              <div className="w-full h-56">
                <img className='w-full h-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzUXwxKjDkf17YKakug9okRsOuGVhZD8h6RA&s" alt="" />
              </div>
              <div className="py-4 px-6">
                <div className="flex justify-between border-b pb-3">
                  <h4 className='font-bold text-slate-900'>$30.00</h4>
                  <h5 className='font-semibold text-amber-500 flex items-center'><span className='me-1'><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style={{ fill: "currentColor" }}><path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path></svg></span> 4.5(2.5k)</h5>
                </div>
                <div className="text-center pt-3">
                  <h4 className='text-2xl text-slate-800 font-playfair font-semibold'>Backed Chicken Pop</h4>
                  <p className='text-gray-600 py-2.5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nisi et maiores!</p>
                  <button type="button" className='py-2.5 w-full my-2 text-sm shadow-md border border-[#F01543] bg-[#F01543] rounded-md transition-all text-white'>Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main meal */}
      <div className="py-20 relative">
        <div className="absolute h-full w-full img-bg -z-10 top-0 left-0"></div>
        <div className="absolute h-full w-full -z-10 top-0 left-0 bg-[#010632db]"></div>
        <h2 className='flex items-center justify-center text-[#F01543] font-semibold font-playfair text-3xl pb-4'><span className='me-2 h-[2.9px] w-9 rounded-xl bg-[#F01543] block'></span>Tasty and Crunchy<span className='ms-2 h-[2.9px] w-9 rounded-xl bg-[#F01543] block'></span></h2>
        <h1 className='text-4xl font-semibold font-playfair text-gray-50 text-center'>Our Main Meals</h1>
        <div className="flex px-52 mt-8 gap-4 justify-center">
          <div className="w-1/2">
            <div className="flex text-gray-100 items-center my-4">
              <img src="https://www.summahealth.org/-/media/project/summahealth/website/page-content/flourish/2_18a_fl_fastfood_400x400.webp?la=en&h=400&w=400&hash=145DC0CF6234A159261389F18A36742A" className='rounded-full object-cover h-16 w-16 shadow-md' alt="" />
              <div className='ps-3 flex flex-col justify-between h-full gap-1.5'>
                <h4 className='flex font-semibold justify-between font-playfair'>Lorem ipsum dolor sit.......................... <span className='font-semibold font-sans not-italic'>$30.00</span></h4>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            <div className="flex text-gray-100 items-center my-4">
              <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/cf/b5/4e/extra-cheese.jpg?w=600&h=400&s=1" className='rounded-full object-cover h-16 w-16 shadow-md' alt="" />
              <div className='ps-3 flex flex-col justify-between h-full gap-1.5'>
                <h4 className='flex font-semibold justify-between font-playfair'>Lorem ipsum dolor sit.......................... <span className='font-semibold font-sans not-italic'>$30.00</span></h4>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            <div className="flex text-gray-100 items-center my-4">
              <img src="https://www.mashed.com/img/gallery/the-best-new-fast-food-menu-items-weve-tried-in-2023-so-far/l-intro-1682446897.jpg" className='rounded-full object-cover h-16 w-16 shadow-md' alt="" />
              <div className='ps-3 flex flex-col justify-between h-full gap-1.5'>
                <h4 className='flex font-semibold justify-between font-playfair'>Lorem ipsum dolor sit.......................... <span className='font-semibold font-sans not-italic'>$30.00</span></h4>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            <div className="flex text-gray-100 items-center my-4">
              <img src="https://www.summahealth.org/-/media/project/summahealth/website/page-content/flourish/2_18a_fl_fastfood_400x400.webp?la=en&h=400&w=400&hash=145DC0CF6234A159261389F18A36742A" className='rounded-full object-cover h-16 w-16 shadow-md' alt="" />
              <div className='ps-3 flex flex-col justify-between h-full gap-1.5'>
                <h4 className='flex font-semibold justify-between font-playfair'>Lorem ipsum dolor sit.......................... <span className='font-semibold font-sans not-italic'>$30.00</span></h4>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex text-gray-100 items-center my-4">
              <img src="https://www.summahealth.org/-/media/project/summahealth/website/page-content/flourish/2_18a_fl_fastfood_400x400.webp?la=en&h=400&w=400&hash=145DC0CF6234A159261389F18A36742A" className='rounded-full object-cover h-16 w-16 shadow-md' alt="" />
              <div className='ps-3 flex flex-col justify-between h-full gap-1.5'>
                <h4 className='flex font-semibold justify-between font-playfair'>Lorem ipsum dolor sit.......................... <span className='font-semibold font-sans not-italic'>$30.00</span></h4>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            <div className="flex text-gray-100 items-center my-4">
              <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/cf/b5/4e/extra-cheese.jpg?w=600&h=400&s=1" className='rounded-full object-cover h-16 w-16 shadow-md' alt="" />
              <div className='ps-3 flex flex-col justify-between h-full gap-1.5'>
                <h4 className='flex font-semibold justify-between font-playfair'>Lorem ipsum dolor sit.......................... <span className='font-semibold font-sans not-italic'>$30.00</span></h4>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            <div className="flex text-gray-100 items-center my-4">
              <img src="https://www.mashed.com/img/gallery/the-best-new-fast-food-menu-items-weve-tried-in-2023-so-far/l-intro-1682446897.jpg" className='rounded-full object-cover h-16 w-16 shadow-md' alt="" />
              <div className='ps-3 flex flex-col justify-between h-full gap-1.5'>
                <h4 className='flex font-semibold justify-between font-playfair'>Lorem ipsum dolor sit.......................... <span className='font-semibold font-sans not-italic'>$30.00</span></h4>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            <div className="flex text-gray-100 items-center my-4">
              <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/cf/b5/4e/extra-cheese.jpg?w=600&h=400&s=1" className='rounded-full object-cover h-16 w-16 shadow-md' alt="" />
              <div className='ps-3 flex flex-col justify-between h-full gap-1.5'>
                <h4 className='flex font-semibold justify-between font-playfair'>Lorem ipsum dolor sit.......................... <span className='font-semibold font-sans not-italic'>$30.00</span></h4>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 gradient-bg px-16">
        <div className="bg-[#F1E2E6] flex rounded-xl py-20 px-20 items-center">
          <div className="w-[370px] h-[420px] shadow-md rounded-xl overflow-hidden">
            <img src="https://img.freepik.com/premium-photo/friends-eating-hamburger-drinking-soda_79405-11739.jpg" className='w-full h-full object-cover' alt="" />
          </div>
          <div className="ps-12 pe-8 w-2/3">
            <h2 className='flex items-center text-[#F01543] font-semibold font-playfair text-3xl pb-4'><span className='me-2 h-[2.9px] w-9 rounded-xl bg-[#F01543] block'></span>Jestimonial</h2>
            <h1 className='text-3xl font-semibold font-playfair text-slate-900 mb-7'>What our clients are saying</h1>
            <div className="bg-white p-8 rounded-xl shadow">
              <div className="flex justify-between items-center">
                <div className="flex text-gray-900 items-center mb-4">
                  <img src="https://www.summahealth.org/-/media/project/summahealth/website/page-content/flourish/2_18a_fl_fastfood_400x400.webp?la=en&h=400&w=400&hash=145DC0CF6234A159261389F18A36742A" className='rounded-full object-cover h-16 w-16 shadow-md' alt="" />
                  <div className='ps-3 flex flex-col justify-between h-full gap-.5'>
                    <h4 className='font-bold font-playfair text-gray-950'>Indigo Violet<span className='text-[#F01543]'>.</span></h4>
                    <p>Co-Founder.</p>
                  </div>
                </div>
                <div className="flex">
                  <h5 className='font-semibold text-amber-500 flex items-center'>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style={{ fill: "currentColor" }}><path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path></svg></span>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style={{ fill: "currentColor" }}><path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path></svg></span>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style={{ fill: "currentColor" }}><path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path></svg></span>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style={{ fill: "currentColor" }}><path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path></svg></span>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style={{ fill: "currentColor" }}><path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path></svg></span>
                  </h5>
                </div>
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, id cumque alias dolore ducimus ratione, eaque, natus exercitationem rerum a fugiat illum magnam tempora rem. Quaerat iure impedit natus recusandae eaque amet officiis voluptatibus tenetur pariatur voluptas quo, iste aliquam soluta provident veniam quibusdam nam sed voluptatem, sequi mollitia ab esse! Dolorum cupiditate totam, beatae fuga reprehenderit.</p>
            </div>
          </div>
        </div>
        {/* Menu */}
        <div className="pt-14 pb-20">
          <h2 className='flex items-center justify-center text-[#F01543] font-semibold font-playfair text-3xl pb-4'><span className='me-2 h-[2.9px] w-9 rounded-xl bg-[#F01543] block'></span>Blog<span className='ms-2 h-[2.9px] w-9 rounded-xl bg-[#F01543] block'></span></h2>
          <h1 className='text-4xl font-semibold font-playfair text-slate-900 text-center'>Our Latest News & Articles</h1>
          <div className="flex justify-between py-14 gap-3">
            <div className="w-1/3 hover:border-[#F01543] transition-all border shadow rounded-xl bg-white overflow-hidden">
              <div className="w-full h-56">
                <img className='w-full h-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzUXwxKjDkf17YKakug9okRsOuGVhZD8h6RA&s" alt="" />
              </div>
              <div className="py-4 px-6">
                <div className="flex justify-between border-b pb-3">
                  <h5 className='font-semibold text-gray-500 flex items-center'><span className='me-1'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "currentColor" }}><path d="M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12 10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36 7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8 8.1 8.1 0 0 1 8 8 8 8 0 0 1-2.39 5.64z"></path><path d="M12 6a3.91 3.91 0 0 0-4 4 3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2 1.91 1.91 0 0 1-2 2z"></path></svg></span> Jane Copper</h5>
                  <h5 className='font-semibold text-gray-500 flex items-center'><span className='me-1'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{ fill: "currentColor" }}><path d="M7 7h10v2H7zm0 4h7v2H7z"></path><path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"></path></svg></span> 2 Comment</h5>
                </div>
                <div className="pt-3">
                  <h4 className='text-2xl text-slate-800 font-playfair not-italic font-semibold'>What Backed Chicken Pop carry?</h4>
                  <button type="button" className='py-2.5 px-6 mt-5 mb-2 shadow-md border border-[#F01543] bg-[#F01543] rounded-md transition-all text-white'>Read More</button>
                </div>
              </div>
            </div>
            <div className="w-1/3 border border-[#F01548] shadow rounded-xl bg-white overflow-hidden">
              <div className="w-full h-56">
                <img className='w-full h-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzUXwxKjDkf17YKakug9okRsOuGVhZD8h6RA&s" alt="" />
              </div>
              <div className="py-4 px-6">
                <div className="flex justify-between border-b pb-3">
                  <h5 className='font-semibold text-gray-500 flex items-center'><span className='me-1'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "currentColor" }}><path d="M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12 10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36 7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8 8.1 8.1 0 0 1 8 8 8 8 0 0 1-2.39 5.64z"></path><path d="M12 6a3.91 3.91 0 0 0-4 4 3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2 1.91 1.91 0 0 1-2 2z"></path></svg></span> Jane Copper</h5>
                  <h5 className='font-semibold text-gray-500 flex items-center'><span className='me-1'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{ fill: "currentColor" }}><path d="M7 7h10v2H7zm0 4h7v2H7z"></path><path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"></path></svg></span> 2 Comment</h5>
                </div>
                <div className="pt-3">
                  <h4 className='text-2xl text-slate-800 font-playfair not-italic font-semibold'>What Backed Chicken Pop carry?</h4>
                  <button type="button" className='py-2.5 px-6 mt-5 mb-2 shadow-md border border-[#F01543] bg-[#F01543] rounded-md transition-all text-white'>Read More</button>
                </div>
              </div>
            </div>
            <div className="w-1/3 border hover:border-[#F01543] transition-all shadow rounded-xl bg-white overflow-hidden">
              <div className="w-full h-56">
                <img className='w-full h-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzUXwxKjDkf17YKakug9okRsOuGVhZD8h6RA&s" alt="" />
              </div>
              <div className="py-4 px-6">
                <div className="flex justify-between border-b pb-3">
                  <h5 className='font-semibold text-gray-500 flex items-center'><span className='me-1'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "currentColor" }}><path d="M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12 10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36 7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8 8.1 8.1 0 0 1 8 8 8 8 0 0 1-2.39 5.64z"></path><path d="M12 6a3.91 3.91 0 0 0-4 4 3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2 1.91 1.91 0 0 1-2 2z"></path></svg></span> Jane Copper</h5>
                  <h5 className='font-semibold text-gray-500 flex items-center'><span className='me-1'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{ fill: "currentColor" }}><path d="M7 7h10v2H7zm0 4h7v2H7z"></path><path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"></path></svg></span> 2 Comment</h5>
                </div>
                <div className="pt-3">
                  <h4 className='text-2xl text-slate-800 font-playfair not-italic font-semibold'>What Backed Chicken Pop carry?</h4>
                  <button type="button" className='py-2.5 px-6 mt-5 mb-2 shadow-md border border-[#F01543] bg-[#F01543] rounded-md transition-all text-white'>Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
