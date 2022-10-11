const img=new Image();
img.src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg";
img.onload=function()
{
console.log('image width'  +this.width)
console.log('image height'  +this.height);
}