let postData = [];

/*
export const getPostData = async () => {
  const url = "/api/posts";
  const response = await fetch(url);
  const data = await response.json();
  postData = data;

  return data;

}; */

export const getPostData = async () => {
	const data = await getPostDataMock();
	postData = data;

	return data;
};

export const getPostById = async (id) => {
	console.log(postData);

	if (postData.length === 0) {
		await getPostData();
	}

	return postData.find((post) => post._id === id);
};

export const getPostDataMock = async () => {
	return [
		{
			_id: '6418576e26d8eda8bbe16729',
			title: 'Housing Solutions During a Divorce',
			image: '/blog/blog-divorce.jpg',
			subtitle:
				'A divorce is a life-changing event that can bring many challenges and decisions.',
			content_1:
				'A divorce is a life-changing event that can bring many challenges and decisions. One of the most significant decisions in this process is what to do with your joint housing. We understand the emotional and practical challenges of a divorce, and we are here to help you find the best housing solutions for you and yours future.',
			title_2: 'Flexible housing solutions',
			content_2:
				'A divorce can mean that you are faced with a number of options for your housing situation. Either way you have to sell, buy a new home or are considering keeping your current home, our experienced real estate agents can help you evaluate your options and make the right decisions for you and your family.',
			title_3: 'Economic Consideration',
			content_3:
				'Housing finances are often an important part of the divorce. We work closely with you to understand your financial situation and help you find housing solutions that fit into your financial plan. This includes pricing, financing and investment aspects.',
			title_4: "Children and the Family's Needs",
			content_4:
				"If there are children involved, their well-being and safety is the most important thing. We help find housing, which meets the family's needs and gives the children a stable and loving environment. This may include proximity to schools, parks and other amenities.",
			title_5: 'Professional Guidance and Support',
			content_5:
				'A divorce can be a challenging time and you need professional guidance and support. Our real estate agents are here to help you navigate the housing process and make it as smooth and stress-free as possible. We are discreet, empathetic and committed to helping you find the best possible decisions during this transition period.',
			title_6: 'Contact Us To Start A New Chapter',
			content_6:
				"Buying a home can be a challenging process, but with the right support it will be a smooth one and exciting experience. Contact us today to discuss yours home purchase needs. Our dedicated team is ready to help you navigate the the housing market and ensure that your home buying experience is a success. Let's make yours together residential dream come true",
		},
		{
			_id: '6418576e26d8eda8bbe16728',
			title: 'Are you dreaming of buying your first home?',
			image: '/blog/blog-first.jpg',
			subtitle:
				'Buying your first home is a big decision that marks the beginning of an exciting one journey into the world of real estate.',
			content_1:
				"Buying your first home is a big decision that marks the beginning of an exciting one journey into the world of real estate. It is a milestone that represents stability, freedom and one investment in your future. We understand how important this decision is, and we're here to guide you along the way.",
			title_2: 'Expertise, advice and trust',
			content_2:
				'When you enter the world of home buying for the first time, it can seem overwhelming. There is so many aspects to consider, from finding the right location to understanding the financing options and negotiate the price. Our experienced estate agents are here to helping you every step of the way.',
			title_3: 'Tailored to your needs',
			content_3:
				'We know that every home seeker has unique needs and wants. Our team is dedicated to understanding your preferences and find the home that suits you best. Regardless of whether you dream of one cozy apartment in the city, a charming detached house in the suburbs or something completely different, then we are there here to make your dream come true.',
			title_4: 'Safety and security',
			content_4:
				'Buying your first home is about more than just bricks and mortar. It is also about feel safe and secure in his decision. Our real estate agents are here to answer your questions questions, uncover all the important details and ensure you make an informed decision there fits your finances and lifestyle.',
			title_5: 'Ready to get started?',
			content_5:
				"Let us help you make your first home dream come true. Regardless of whether you already have one clear idea of what you are looking for, or if you need help to uncover your wishes, we are here for you. Contact us today and let's start the journey towards your first housing.",
			title_6:
				'We look forward to helping you find the perfect home that meets your dreams and needs.',
		},
		// {
		// 	_id: '6418576e26d8eda8bbe167ddddd29',
		// 	title: 'Buying a House',
		// 	subtitle: 'Subtitle',
		// 	image: '/blog/blog-buy.jpg',
		// },
		{
			_id: '2332233423234423324243423',
			title: 'When Life Takes Unexpected Turns',
			subtitle:
				'Losing a partner is a heart-wrenching experience that can change your entire life situation.',
			image: '/blog/blog-loss.jpg',
			content_1:
				'Losing a partner is a heart-wrenching experience that can change your entire life situation. One of the practical aspects that often require attention in this difficult time is handling your shared housing. We understand that this can be a challenging task and we are here to help you make the process as smooth and sensitive as possible.',
			title_2: 'Time for Reflection and Support',
			content_2:
				'When you lose your partner, it is normal to need time for grief and reflection. Our dedicated real estate agents understand the need for empathy and patience. We are here to support you through the entire process and ensure that you feel safe and well guided.',
			title_3: 'Individual Needs, Unique Solutions',
			content_3:
				'Every situation is unique, and this also applies to selling a home after a loss. We work closely together with you to understand your individual needs and wishes. If you want to keep the home as one remember, want to move to a new property or need help making decisions during this time, is we here to offer tailor-made solutions.',
			title_4: 'Professional handling of the property sale',
			content_4:
				'We handle all aspects of the home sale, from pricing and marketing to viewings and negotiation so you can focus on what is most important to you. We take care of all of them practical details and ensures that you get the best possible price for your property.',
			title_5: 'We make it as easy as possible',
			content_5:
				'Having to sell a joint property after a loss can be an overwhelming task. We are here to ease the burden and help you move forward. We values your confidentiality and will do everything we can to support you in this sensitive process.',
			title_6: 'Contact Us For Support and Guidance',
			content_6:
				'If you have lost your partner and are faced with selling your home, we are here to help. We understand the emotional challenges of this time and are ready to provide you professional support and guidance. Contact us today to begin the process and find it solution that best suits your needs. We are here for you during this difficult time.',
		},
		{
			_id: '233423',
			title: 'Home choice in Retirement',
			subtitle:
				'Retirement is a time of new opportunities. An important part of this life phase is to choose the right home that suits your needs, wishes and dreams.',
			image: '/blog/blog-pension.jpg',
			content_1:
				'Retirement is a time of new opportunities and liberation. It is a chapter in life where you can focus on living life to the fullest and enjoying well-deserved rest. An important part of this life phase is to choose the right home that suits your needs, wishes and dreams.',
			title_2: 'Direction, Dreams and Priorities',
			content_2:
				'Your home in retirement must reflect your direction, dreams and priorities. Do you want one maintenance-free apartment with easy access to all amenities, or you dream of an idyllic house by the water? Maybe you want to move closer to your children and grandchildren? Whatever your wishes are, we are here to help you define them and find the ideal place to call your home in retirement.',
			title_3: 'Financial Planning and Investment',
			content_3:
				'Retirement often involves financial planning and consideration. Our experienced real estate agents are here to help you understand how your housing choice might fit in your retirement savings. We can help evaluate purchase and sale prices, financing options and investment aspects to ensure you make the best possible ones decisions.',
			title_4: 'Facilities and Community',
			content_4:
				"Your retirement is not only about where you live, but also about the life you want to live. We helps you find homes that offer amenities and communities that fit yours interests and lifestyle. Whether it's golf courses, community clubs, or scenic hiking trails, is there a home that meets your wishes.",
			title_5: 'Stress-free transition',
			content_5:
				'Making decisions about housing in retirement can seem challenging, but it needs to be not to be. We are here to make the transition to your dream home retirement as stress-free as possible. We handle all aspects of the home sale and purchase, so you can focus on what really matters in your new phase of life.',
			title_6: 'Contact us today',
			content_6:
				'Retirement is a time to enjoy life, and your home should reflect the beauty and comfort you have worked so hard to achieve. We are here to help you to navigate this exciting journey. Contact us today to start your new chapter with the ideal home that will fulfill your dreams for retirement. We look forward to helping you take the next step towards a life full of possibilities and joy.',
		},
		{
			_id: '23423423423',
			title: 'Selling your House',
			subtitle:
				'Selling your home is an important decision that can have a big impact on your finances and lifestyle.',
			image: '/blog/blog-sell.jpg',
			content_1:
				'Selling your home is an important decision that can have a big impact on your finances and lifestyle. We are here to help you navigate the home sale process and ensure that you get the best possible price for your property. Here are some important worth knowing considerations for anyone considering selling their home.',
			title_2: 'Pricing and Valuation',
			content_2:
				'A key component of a successful home sale is setting the right price for your property. Our experienced real estate agents help you value your home in a way that reflects the market and at the same time ensures that you get full value for your investment.',
			title_3: 'Sales strategy and marketing',
			content_3:
				"Creating awareness around your home is essential to attracting potential buyers. We develops a tailored marketing strategy that highlights your property's uniqueness characteristics and attract attention on the right platforms.",
			title_4: 'Housing preparation',
			content_4:
				'In order to make your home as attractive as possible to buyers, we give you advice on any improvements or repairs that can increase the appeal of the property. This can help increase selling price and shorten the time it takes to sell.',
			title_5: 'Views and follow-up',
			content_5:
				"We handle all aspects of showings, including planning and communicating with prospects buyers. Our goal is to provide a seamless experience for both sellers and buyers. We follow up potential buyers and provides regular updates so you're always in control.",
			title_6: 'Negotiation and conclusion',
			content_6:
				'Negotiating the sale price is an important phase in the home sale. Our real estate agents are experienced in negotiate on your behalf to get the best deal possible. We ensure a smooth end and helping to handle all documentation and the legal aspects of the process.',
			title_7: 'Contact us today',
			content_7:
				"Selling your home is a complex process, but with the right support it will be a success. Contact us today to discuss your home selling needs. Our dedicated team is ready to help you maximize the sale price and minimize the stress in the home sale process. Together, let's help you achieve the best possible results for your property.",
		},
		{
			_id: '34234234423',
			title: 'Experience the beauty of summer',
			subtitle:
				'Summer is a time filled with joy, sun and unforgettable moments with family and friends.',
			image: '/blog/blog-summer.jpg',
			content_1:
				'Summer is a time filled with joy, sun and unforgettable moments with family and friends. What if you could take this summer experience to the next level? A summer house is not only a property - it is a sanctuary, an investment in unforgettable moments and an opportunity for to experience the beauty and tranquility of nature first hand.',
			title_2: 'Your Tailor Made Cottage Adventure',
			content_2:
				'We are dedicated to helping you find the perfect one holiday home that meets your dreams and needs. Regardless of whether you are looking for a cozy wooden house by the coast, a modern bath house with a view of the lake, or something completely different, we have the ideal summer house for you.',
			title_3: 'Closer to Nature, Closer to You',
			content_3:
				'A holiday home is not just a place to get away from the hustle and bustle of everyday life. It is an option to immerse yourself in nature, rekindle your senses and create memories that will last a lifetime. Our selection of holiday homes allows you to choose the location that speaks to your soul - whether it is by the sea, in the depths of the forest, by a lake or in the mountains.',
			title_4: 'Investment in Quality of Life',
			content_4:
				'Owning a holiday home is more than just a property - it is an investment in quality of life. Summer is never far away when you have your own sanctuary. Use it for holidays, weekend stays or even as a year-round retreat. It is also an excellent investment, then The summer house market in Denmark remains strong and stable.',
			title_5: 'Let us help you find your dream summer house',
			content_5:
				'We understand that choosing your holiday home is an emotional and practical decision. Our experienced estate agents are here to help you find the holiday home that suits your taste and budget. We help you navigate the process, from viewings to closing, so you can enjoy the coming summer in your dream summer house.',
		},
	];
};

export const createPost = async (post) => {
	return fetch('/api/posts', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(post),
	}).then((response) => {
		return response.json();
	});
};

export const updatePost = async (post) => {
	return fetch('/api/posts', {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(post),
	}).then((response) => {
		return response.json();
	});
};
