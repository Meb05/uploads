
$('.serchbycat').click(function(){
	var catid = $(this).attr('data-cat-id');
	$('.view').removeClass('tab-active');
	$('#view-apps').addClass('tab-active');
	$('.apps-list .app').css('display', 'none');
	$('.apps-list .app-link[data-cat-id="' + catid + '"] .app').css('display', 'block');
	//alert(catid);
});


var $$=Dom7;var app=new Framework7({root:'#app',id:'io.iosninja.app',name:'iOS Ninja',theme:'auto',data:function(){return{};},methods:{helloWorld:function(){app.dialog.alert('Hello World!');},},routes:routes,});var homeView=app.views.create('#view-main-page',{url:'/'});var catalogView=app.views.create('#view-apps',{url:'/apps/'});var settingsView=app.views.create('#view-info',{url:'/info/'});