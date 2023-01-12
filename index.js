const swiper = new Swiper('.swiper', {
	autoplay: {
	  delay: 5000,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		type: 'bullets',
	  },
   });
//  sort 
const layout = document.querySelector('.hit-class_item');

const classes = Array.from(document.querySelectorAll('.hit-class_sort'))
classes.forEach((item, index) => {
	item.addEventListener('click', function chooseOption() {
		if (item.innerText === "Lớp đang diễn ra") {
			layout.innerHTML = `

			<div class="hit-class_item-infor">
			<div class="item-name">
				<div class="item">
					<h4>
						C/C++</h4>
				</div>
			</div>
			<div class="item-infor">
				<p class="name-class">
					
					Lớp C/C++
				</p>
			   <div class="item-introduce">
				   <div class="item-introduce_nav">
						<span class="postion-class cell">
							Địa điểm:
						</span>
						<p class="item-sub cell">
							Hà Nam</p>
				   </div>
				   <div class="item-introduce_nav">
						<span class="postion-class cell">
							Thời gian:
						</span>
						<p class="item-sub cell">
							Thứ 5 - 9h30</p>
				   </div>
				   <div class="item-introduce_nav">
						<span class="postion-class cell">
							Trạng thái:
						</span>
						<p class="item-sub cell status">
							Đang diễn ra</p>
				   </div>
			   </div>
			   <button class="hit-class_btn">Đăng ký</button>
			</div>
		</div>

		<div class="hit-class_item-infor">
		<div class="item-name">
			<div class="item">
				<h4>C++</h4>
			</div>
		</div>
		<div class="item-infor">
			<p class="name-class">
				
Lớp tư duy lập trình
			</p>
		   <div class="item-introduce">
			   <div class="item-introduce_nav">
					<span class="postion-class cell">
						Địa điểm:
					</span>
					<p class="item-sub cell">Phòng CLB</p>
			   </div>
			   <div class="item-introduce_nav">
					<span class="postion-class cell">
						Thời gian:
					</span>
					<p class="item-sub cell">
						
Thứ 4 - 18h</p>
			   </div>
			   <div class="item-introduce_nav">
					<span class="postion-class cell">
						Trạng thái:
					</span>
					<p class="item-sub cell status">
						Đang diễn ra</p>
			   </div>
		   </div>
		   <button class="hit-class_btn">Đăng ký</button>
		</div>
	</div>

	
	<div class="hit-class_item-infor">
	<div class="item-name">
		<div class="item">
			<h4>Web
			</h4>
		</div>
	</div>
	<div class="item-infor">
		<p class="name-class">
			
Lớp thiết kế Web Public
		</p>
	   <div class="item-introduce">
		   <div class="item-introduce_nav">
				<span class="postion-class cell">
					Địa điểm:
				</span>
				<p class="item-sub cell">
					Tầng 9 - A1</p>
		   </div>
		   <div class="item-introduce_nav">
				<span class="postion-class cell">
					Thời gian:
				</span>
				<p class="item-sub cell">
					
Thứ 6 - 18h</p>
		   </div>
		   <div class="item-introduce_nav">
				<span class="postion-class cell ">
					Trạng thái:
				</span>
				<p class="item-sub cell status">
					Đang diễn ra</p>
		   </div>
	   </div>
	   <button class="hit-class_btn">Đăng ký</button>
	</div>
</div>

<div class="hit-class_item-infor">
<div class="item-name">
	<div class="item">
		<h4>Java</h4>
	</div>
</div>
<div class="item-infor">
	<p class="name-class">
		
Lớp Java
	</p>
   <div class="item-introduce">
	   <div class="item-introduce_nav">
			<span class="postion-class cell">
				Địa điểm:
			</span>
			<p class="item-sub cell">
				Tầng 9 - A1</p>
	   </div>
	   <div class="item-introduce_nav">
			<span class="postion-class cell">
				Thời gian:
			</span>
			<p class="item-sub cell">
				
Thứ 6 - 18h</p>
	   </div>
	   <div class="item-introduce_nav">
			<span class="postion-class cell">
				Trạng thái:
			</span>
			<p class="item-sub cell status">
				Đang diễn ra</p>
	   </div>
   </div>
   <button class="hit-class_btn">Đăng ký</button>
</div>
</div>
<div class="hit-class_item-infor">
<div class="item-name">
	<div class="item">
		<h4>Python</h4>
	</div>
</div>
<div class="item-infor">
	<p class="name-class">
		
Lớp Python
	</p>
   <div class="item-introduce">
	   <div class="item-introduce_nav">
			<span class="postion-class cell">
				Địa điểm:
			</span>
			<p class="item-sub cell">
				Tầng 9 - A1</p>
	   </div>
	   <div class="item-introduce_nav">
			<span class="postion-class cell">
				Thời gian:
			</span>
			<p class="item-sub cell">
				Chủ Nhật - 18h</p>
	   </div>
	   <div class="item-introduce_nav">
			<span class="postion-class cell">
				Trạng thái:
			</span>
			<p class="item-sub cell status"> 
				Đang diễn ra</p>
	   </div>
   </div>
   <button class="hit-class_btn">Đăng ký</button>
</div>
</div>


<div class="hit-class_item-infor">
<div class="item-name">
	<div class="item">
		<h4>Sol
		</h4>
	</div>
</div>
<div class="item-infor">
	<p class="name-class">
		
Lớp Blockchain
	</p>
   <div class="item-introduce">
	   <div class="item-introduce_nav">
			<span class="postion-class cell">
				Địa điểm:
			</span>
			<p class="item-sub cell">Phòng CLB</p>
	   </div>
	   <div class="item-introduce_nav">
			<span class="postion-class cell">
				Thời gian:
			</span>
			<p class="item-sub cell">
				
Thứ 2 - 18h</p>
	   </div>
	   <div class="item-introduce_nav">
			<span class="postion-class cell">
				Trạng thái:
			</span>
			<p class="item-sub cell status">
				Đang diễn ra</p>
	   </div>
   </div>
   <button class="hit-class_btn">Đăng ký</button>
</div>
</div>


<div class="hit-class_item-infor">
<div class="item-name">
	<div class="item">
		<h4>Ps</h4>
	</div>
</div>
<div class="item-infor">
	<p class="name-class">
	   
Lớp Photoshop
	</p>
   <div class="item-introduce">
	   <div class="item-introduce_nav">
			<span class="postion-class cell">
				Địa điểm:
			</span>
			<p class="item-sub cell">
				Tầng 9 - A1</p>
	   </div>
	   <div class="item-introduce_nav">
			<span class="postion-class cell">
				Thời gian:
			</span>
			<p class="item-sub cell">
				
Chủ Nhật - 18h</p>
	   </div>
	   <div class="item-introduce_nav">
			<span class="postion-class cell">
				Trạng thái:
			</span>
			<p class="item-sub cell status">
				Đang diễn ra</p>
	   </div>
   </div>
   <button class="hit-class_btn">Đăng ký</button>
</div>
</div>

		
<div class="hit-class_item-infor">
<div class="item-name">
	<div class="item">
		<h4>Unity</h4>
	</div>
</div>
<div class="item-infor">
	<p class="name-class">
		
Lớp Unity
	</p>
   <div class="item-introduce">
	   <div class="item-introduce_nav">
			<span class="postion-class cell">
				Địa điểm:
			</span>
			<p class="item-sub cell">Phòng CLB</p>
	   </div>
	   <div class="item-introduce_nav">
			<span class="postion-class cell">
				Thời gian:
			</span>
			<p class="item-sub cell">
				
Thứ 3 - 18h</p>
	   </div>
	   <div class="item-introduce_nav">
			<span class="postion-class cell">
				Trạng thái:
			</span>
			<p class="item-sub cell status">
				Đang diễn ra</p>
	   </div>
   </div>
   <button class="hit-class_btn">Đăng ký</button>
</div>
</div>

			`;
		}
		else if (item.innerText === "Lớp sắp diễn ra") {
			layout.innerHTML = `
			<div class="hit-class_item-infor">
			<div class="item-name">
				<div class="item">
					<h4>Nodejs</h4>
				</div>
			</div>
			<div class="item-infor">
				<p class="name-class">
					Lớp Nodejs
				</p>
			   <div class="item-introduce">
				   <div class="item-introduce_nav">
						<span class="postion-class cell">
							Địa điểm:
						</span>
						<p class="item-sub cell">Phòng CLB</p>
				   </div>
				   <div class="item-introduce_nav">
						<span class="postion-class cell">
							Thời gian:
						</span>
						<p class="item-sub cell">
							T2/2023</p>
				   </div>
				   <div class="item-introduce_nav">
						<span class="postion-class cell">
							Trạng thái:
						</span>
						<p class="item-sub cell status">Sắp diễn ra</p>
				   </div>
			   </div>
			   <button class="hit-class_btn">Đăng ký</button>
			</div>
		</div>


		<div class="hit-class_item-infor">
		<div class="item-name">
			<div class="item">
				<h4>AI</h4>
			</div>
		</div>
		<div class="item-infor">
			<p class="name-class">
				
Lớp AI
			</p>
		   <div class="item-introduce">
			   <div class="item-introduce_nav">
					<span class="postion-class cell">
						Địa điểm:
					</span>
					<p class="item-sub cell">Phòng CLB</p>
			   </div>
			   <div class="item-introduce_nav">
					<span class="postion-class cell">
						Thời gian:
					</span>
					<p class="item-sub cell">
						T2/2023</p>
			   </div>
			   <div class="item-introduce_nav">
					<span class="postion-class cell">
						Trạng thái:
					</span>
					<p class="item-sub cell status">Sắp diễn ra</p>
			   </div>
		   </div>
		   <button class="hit-class_btn">Đăng ký</button>
		</div>
	</div>


	<div class="hit-class_item-infor">
	<div class="item-name">
		<div class="item">
			<h4>ReactJS</h4>
		</div>
	</div>
	<div class="item-infor">
		<p class="name-class">
			
Lớp ReactJS
		</p>
	   <div class="item-introduce">
		   <div class="item-introduce_nav">
				<span class="postion-class cell">
					Địa điểm:
				</span>
				<p class="item-sub cell">Phòng CLB</p>
		   </div>
		   <div class="item-introduce_nav">
				<span class="postion-class cell">
					Thời gian:
				</span>
				<p class="item-sub cell">
					T2/2023</p>
		   </div>
		   <div class="item-introduce_nav">
				<span class="postion-class cell">
					Trạng thái:
				</span>
				<p class="item-sub cell status">Sắp diễn ra</p>
		   </div>
	   </div>
	   <button class="hit-class_btn">Đăng ký</button>
	</div>
</div>

<div class="hit-class_item-infor">
<div class="item-name">
	<div class="item">
		<h4>Graphic</h4>
	</div>
</div>
<div class="item-infor">
	<p class="name-class">
		
Lớp đồ họa
	</p>
   <div class="item-introduce">
	   <div class="item-introduce_nav">
			<span class="postion-class cell">
				Địa điểm:
			</span>
			<p class="item-sub cell">Phòng CLB</p>
	   </div>
	   <div class="item-introduce_nav">
			<span class="postion-class cell">
				Thời gian:
			</span>
			<p class="item-sub cell">
				T2/2023</p>
	   </div>
	   <div class="item-introduce_nav">
			<span class="postion-class cell">
				Trạng thái:
			</span>
			<p class="item-sub cell status">Sắp diễn ra</p>
	   </div>
   </div>
   <button class="hit-class_btn">Đăng ký</button>
</div>
</div>


<div class="hit-class_item-infor">
                    <div class="item-name">
                        <div class="item">
                            <h4>Java
                            </h4>
                        </div>
                    </div>
                    <div class="item-infor">
                        <p class="name-class">
                            
Lớp Java Web
                        </p>
                       <div class="item-introduce">
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Địa điểm:
                                </span>
                                <p class="item-sub cell">Phòng CLB</p>
                           </div>
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Thời gian:
                                </span>
                                <p class="item-sub cell">
                                    T2/2023</p>
                           </div>
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Trạng thái:
                                </span>
                                <p class="item-sub cell status">Sắp diễn ra</p>
                           </div>
                       </div>
                       <button class="hit-class_btn">Đăng ký</button>
                    </div>
                </div>


			`
		}
		else if(item.innerText === "Lớp đã kết thúc") {
			layout.innerHTML = `
			<div class="hit-class_item-infor">
			<div class="item-name">
				<div class="item">
					<h4>C++</h4>
				</div>
			</div>
			<div class="item-infor">
				<p class="name-class">
					Lớp OOP
				</p>
			   <div class="item-introduce">
				   <div class="item-introduce_nav">
						<span class="postion-class cell">
							Địa điểm:
						</span>
						<p class="item-sub cell">Tầng 9 - A1</p>
				   </div>
				   <div class="item-introduce_nav">
						<span class="postion-class cell">
							Thời gian:
						</span>
						<p class="item-sub cell">
							
Thứ 3 - 18h</p>
				   </div>
				   <div class="item-introduce_nav">
						<span class="postion-class cell">
							Trạng thái:
						</span>
						<p class="item-sub cell status">
							Đã kết thúc</p>
				   </div>
			   </div>
			   <button class="hit-class_btn">Xem Thêm</button>
			</div>
		</div>
			`
		}

		else {
			layout.innerHTML = `
			<div class="hit-class_item-infor">
                    <div class="item-name">
                        <div class="item">
                            <h4>
                                C/C++</h4>
                        </div>
                    </div>
                    <div class="item-infor">
                        <p class="name-class">
                            
                            Lớp C/C++
                        </p>
                       <div class="item-introduce">
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Địa điểm:
                                </span>
                                <p class="item-sub cell">
                                    Hà Nam</p>
                           </div>
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Thời gian:
                                </span>
                                <p class="item-sub cell">
                                    Thứ 5 - 9h30</p>
                           </div>
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Trạng thái:
                                </span>
                                <p class="item-sub cell status">
                                    Đang diễn ra</p>
                           </div>
                       </div>
                       <button class="hit-class_btn">Đăng ký</button>
                    </div>
                </div>
                <div class="hit-class_item-infor">
                    <div class="item-name">
                        <div class="item">
                            <h4>C++</h4>
                        </div>
                    </div>
                    <div class="item-infor">
                        <p class="name-class">
                            
Lớp tư duy lập trình
                        </p>
                       <div class="item-introduce">
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Địa điểm:
                                </span>
                                <p class="item-sub cell">Phòng CLB</p>
                           </div>
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Thời gian:
                                </span>
                                <p class="item-sub cell">
                                    
Thứ 4 - 18h</p>
                           </div>
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Trạng thái:
                                </span>
                                <p class="item-sub cell status">
                                    Đang diễn ra</p>
                           </div>
                       </div>
                       <button class="hit-class_btn">Đăng ký</button>
                    </div>
                </div>
                <div class="hit-class_item-infor">
                    <div class="item-name">
                        <div class="item">
                            <h4>Web
                            </h4>
                        </div>
                    </div>
                    <div class="item-infor">
                        <p class="name-class">
                            
Lớp thiết kế Web Public
                        </p>
                       <div class="item-introduce">
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Địa điểm:
                                </span>
                                <p class="item-sub cell">
                                    Tầng 9 - A1</p>
                           </div>
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Thời gian:
                                </span>
                                <p class="item-sub cell">
                                    
Thứ 6 - 18h</p>
                           </div>
                           <div class="item-introduce_nav">
                                <span class="postion-class cell ">
                                    Trạng thái:
                                </span>
                                <p class="item-sub cell status">
                                    Đang diễn ra</p>
                           </div>
                       </div>
                       <button class="hit-class_btn">Đăng ký</button>
                    </div>
                </div>
                <div class="hit-class_item-infor">
                    <div class="item-name">
                        <div class="item">
                            <h4>Java</h4>
                        </div>
                    </div>
                    <div class="item-infor">
                        <p class="name-class">
                            
Lớp Java
                        </p>
                       <div class="item-introduce">
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Địa điểm:
                                </span>
                                <p class="item-sub cell">
                                    Tầng 9 - A1</p>
                           </div>
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Thời gian:
                                </span>
                                <p class="item-sub cell">
                                    
Thứ 6 - 18h</p>
                           </div>
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Trạng thái:
                                </span>
                                <p class="item-sub cell status">
                                    Đang diễn ra</p>
                           </div>
                       </div>
                       <button class="hit-class_btn">Đăng ký</button>
                    </div>
                </div>
                <div class="hit-class_item-infor">
                    <div class="item-name">
                        <div class="item">
                            <h4>Python</h4>
                        </div>
                    </div>
                    <div class="item-infor">
                        <p class="name-class">
                            
Lớp Python
                        </p>
                       <div class="item-introduce">
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Địa điểm:
                                </span>
                                <p class="item-sub cell">
                                    Tầng 9 - A1</p>
                           </div>
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Thời gian:
                                </span>
                                <p class="item-sub cell">
                                    Chủ Nhật - 18h</p>
                           </div>
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Trạng thái:
                                </span>
                                <p class="item-sub cell status"> 
                                    Đang diễn ra</p>
                           </div>
                       </div>
                       <button class="hit-class_btn">Đăng ký</button>
                    </div>
                </div>
                <div class="hit-class_item-infor">
                    <div class="item-name">
                        <div class="item">
                            <h4>C++</h4>
                        </div>
                    </div>
                    <div class="item-infor">
                        <p class="name-class">
                            Lớp OOP
                        </p>
                       <div class="item-introduce">
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Địa điểm:
                                </span>
                                <p class="item-sub cell">Tầng 9 - A1</p>
                           </div>
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Thời gian:
                                </span>
                                <p class="item-sub cell">
                                    
Thứ 3 - 18h</p>
                           </div>
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Trạng thái:
                                </span>
                                <p class="item-sub cell status">
                                    Đã kết thúc</p>
                           </div>
                       </div>
                       <button class="hit-class_btn">Xem Thêm</button>
                    </div>
                </div>
                <div class="hit-class_item-infor">
                    <div class="item-name">
                        <div class="item">
                            <h4>Sol
                            </h4>
                        </div>
                    </div>
                    <div class="item-infor">
                        <p class="name-class">
                            
Lớp Blockchain
                        </p>
                       <div class="item-introduce">
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Địa điểm:
                                </span>
                                <p class="item-sub cell">Phòng CLB</p>
                           </div>
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Thời gian:
                                </span>
                                <p class="item-sub cell">
                                    
Thứ 2 - 18h</p>
                           </div>
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Trạng thái:
                                </span>
                                <p class="item-sub cell status">
                                    Đang diễn ra</p>
                           </div>
                       </div>
                       <button class="hit-class_btn">Đăng ký</button>
                    </div>
                </div>
                <div class="hit-class_item-infor">
                    <div class="item-name">
                        <div class="item">
                            <h4>Ps</h4>
                        </div>
                    </div>
                    <div class="item-infor">
                        <p class="name-class">
                           
Lớp Photoshop
                        </p>
                       <div class="item-introduce">
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Địa điểm:
                                </span>
                                <p class="item-sub cell">
                                    Tầng 9 - A1</p>
                           </div>
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Thời gian:
                                </span>
                                <p class="item-sub cell">
                                    
Chủ Nhật - 18h</p>
                           </div>
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Trạng thái:
                                </span>
                                <p class="item-sub cell status">
                                    Đang diễn ra</p>
                           </div>
                       </div>
                       <button class="hit-class_btn">Đăng ký</button>
                    </div>
                </div>
                <div class="hit-class_item-infor">
                    <div class="item-name">
                        <div class="item">
                            <h4>Nodejs</h4>
                        </div>
                    </div>
                    <div class="item-infor">
                        <p class="name-class">
                            Lớp Nodejs
                        </p>
                       <div class="item-introduce">
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Địa điểm:
                                </span>
                                <p class="item-sub cell">Phòng CLB</p>
                           </div>
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Thời gian:
                                </span>
                                <p class="item-sub cell">
                                    T2/2023</p>
                           </div>
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Trạng thái:
                                </span>
                                <p class="item-sub cell status">Sắp diễn ra</p>
                           </div>
                       </div>
                       <button class="hit-class_btn">Đăng ký</button>
                    </div>
                </div>
                <div class="hit-class_item-infor">
                    <div class="item-name">
                        <div class="item">
                            <h4>AI</h4>
                        </div>
                    </div>
                    <div class="item-infor">
                        <p class="name-class">
                            
Lớp AI
                        </p>
                       <div class="item-introduce">
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Địa điểm:
                                </span>
                                <p class="item-sub cell">Phòng CLB</p>
                           </div>
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Thời gian:
                                </span>
                                <p class="item-sub cell">
                                    T2/2023</p>
                           </div>
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Trạng thái:
                                </span>
                                <p class="item-sub cell status">Sắp diễn ra</p>
                           </div>
                       </div>
                       <button class="hit-class_btn">Đăng ký</button>
                    </div>
                </div>
                <div class="hit-class_item-infor">
                    <div class="item-name">
                        <div class="item">
                            <h4>ReactJS</h4>
                        </div>
                    </div>
                    <div class="item-infor">
                        <p class="name-class">
                            
Lớp ReactJS
                        </p>
                       <div class="item-introduce">
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Địa điểm:
                                </span>
                                <p class="item-sub cell">Phòng CLB</p>
                           </div>
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Thời gian:
                                </span>
                                <p class="item-sub cell">
                                    T2/2023</p>
                           </div>
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Trạng thái:
                                </span>
                                <p class="item-sub cell status">Sắp diễn ra</p>
                           </div>
                       </div>
                       <button class="hit-class_btn">Đăng ký</button>
                    </div>
                </div>
                <div class="hit-class_item-infor">
                    <div class="item-name">
                        <div class="item">
                            <h4>Unity</h4>
                        </div>
                    </div>
                    <div class="item-infor">
                        <p class="name-class">
                            
Lớp Unity
                        </p>
                       <div class="item-introduce">
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Địa điểm:
                                </span>
                                <p class="item-sub cell">Phòng CLB</p>
                           </div>
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Thời gian:
                                </span>
                                <p class="item-sub cell">
                                    
Thứ 3 - 18h</p>
                           </div>
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Trạng thái:
                                </span>
                                <p class="item-sub cell status">
                                    Đang diễn ra</p>
                           </div>
                       </div>
                       <button class="hit-class_btn">Đăng ký</button>
                    </div>
                </div>
                <div class="hit-class_item-infor">
                    <div class="item-name">
                        <div class="item">
                            <h4>Graphic</h4>
                        </div>
                    </div>
                    <div class="item-infor">
                        <p class="name-class">
                            
Lớp đồ họa
                        </p>
                       <div class="item-introduce">
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Địa điểm:
                                </span>
                                <p class="item-sub cell">Phòng CLB</p>
                           </div>
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Thời gian:
                                </span>
                                <p class="item-sub cell">
                                    T2/2023</p>
                           </div>
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Trạng thái:
                                </span>
                                <p class="item-sub cell status">Sắp diễn ra</p>
                           </div>
                       </div>
                       <button class="hit-class_btn">Đăng ký</button>
                    </div>
                </div>
                <div class="hit-class_item-infor">
                    <div class="item-name">
                        <div class="item">
                            <h4>Java
                            </h4>
                        </div>
                    </div>
                    <div class="item-infor">
                        <p class="name-class">
                            
Lớp Java Web
                        </p>
                       <div class="item-introduce">
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Địa điểm:
                                </span>
                                <p class="item-sub cell">Phòng CLB</p>
                           </div>
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Thời gian:
                                </span>
                                <p class="item-sub cell">
                                    T2/2023</p>
                           </div>
                           <div class="item-introduce_nav">
                                <span class="postion-class cell">
                                    Trạng thái:
                                </span>
                                <p class="item-sub cell status">Sắp diễn ra</p>
                           </div>
                       </div>
                       <button class="hit-class_btn">Đăng ký</button>
                    </div>
                </div>`
		}
	})
})