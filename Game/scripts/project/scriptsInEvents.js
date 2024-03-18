
// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";
function Data(){


var cannon = [60,1,200]
var mortar = [75,1,150]
var hawitzer = [80,1,100]
var Data = [cannon,mortar,hawitzer]
return Data;
}
function Pin(runtime){

var obj = runtime.objects.TestObj.getAllInstances()
var mouse = runtime.objects.Mouse
var player = runtime.objects.Player.getFirstInstance();
var imp = 0;
var array = runtime.objects.Positions.getFirstInstance()
var sel;
for(let i = 0; i < obj.length;i++){
	var dist = Math.sqrt(Math.pow(mouse.getMouseX() - obj[i].x,2) + Math.pow(mouse.getMouseY() -obj[i].y,2));
	if( dist < 30 ){
		sel = obj[i]
		break;
	}
}

for (let i = 1  ;i < player.getImagePointCount(); i++){
		
		var dist2 = Math.sqrt(Math.pow(player.getImagePointX(i) - sel.x,2) + Math.pow(player.getImagePointY(i) -sel.y,2));
		if(dist2 < 50){
			imp = i;
			
			array.setAt(i, i, 0, 0)
			array.setAt(sel.animationName, i, 1, 0)
			
		}
		
	}
	
for(let i = 0;i<5;i++){
			console.log(array.getAt(i,0,0))
			}
}
function Snapp(runtime){ 
	
	var I = runtime.objects.TestObj.getAllInstances()
	var Ins = I[I.length - 1]
	//console.log(Ins, runtime.globalVars.Clicked)
	
	var H1 = runtime.objects.SnapGridPlace
	var player = runtime.objects.Player.getFirstInstance();
	
	for (let i = 1  ;i < player.getImagePointCount(); i++){
		var H1I = player
			//console.log(H1I,i,player.getImagePointCount())
		var [Targetx,Targety] =[ H1I.getImagePointX(i),H1I.getImagePointY(i)]
			//console.log(Targetx)
		var [Scox,Scoy] = Ins.getPosition()
		
		var dist = Math.sqrt(Math.pow(Targetx - Scox,2) + Math.pow(Targety - Scoy,2));
		
		var disttt = Math.sqrt(Math.pow(Targetx - Targetx + 60,2) + Math.pow(Targety - Targety + 60,2));

		if (dist < 30){

				Ins.setPosition(Targetx + 2.5, Targety)
				//Ins.setPosition(Ins.x + 50,Ins.y + 50)

		}
			
	}
	
}
function Spawner(runtime){
	var Enemy = runtime.objects.Enemy
	
	var Player = runtime.objects.Player.getFirstInstance()
	if(Player.width < 0){
		var ins = Enemy.createInstance("Player",Player.x-300,Player.y)
		for (let i=0; i<Enemy.getAllInstances().length;i++){
		if (Player.x-300 - Enemy.getAllInstances()[i].x < 100){
			ins.x = ins.x - 50
		}
		}
		
	}else{
		var ins = Enemy.createInstance("Player",Player.x+300,Player.y)
		console.log(ins.getPosition(),Player.getPosition())
		for (let i=0; i<Enemy.getAllInstances().length;i++){
		if (ins.x - Enemy.getAllInstances()[i].x < 100){
			ins.x = ins.x + 50
			console.log(ins.getPosition(),Player.getPosition())
		}
		}
	}
	
}
function EnemyTorp(runtime){
	var Enemies = runtime.objects.Enemy.getAllInstances()
	var Player = runtime.objects.Player.getFirstInstance()
	var torp = runtime.objects.Torpedo
	for (let i = 0; i < Enemies.length;i++) {
		var CT = torp.createInstance("Player",Enemies[i].getImagePointX(1),Enemies[i].getImagePointY(1))
	}
}
function Force(c,angle,img,speed){
	var force;
	var Player = c.objects.Player.getFirstInstance()
	console.log(c,angle)
	var Scox = Player.getImagePointX(img);
	
	var Scoy = Player.getImagePointY(img);
	var [Targetx ,Targety] = c.objects.Mouse.getMousePosition("Player");

	var distance = Math.sqrt(Math.pow(Targetx - Scox,2) + Math.pow(Targety - Scoy,2));
	var needAng = Math.atan2(Targetx - Scox , Targety - Scoy)
	
	
	
	
	var angleRadians = angle * Math.PI / 180; // Convert angle to radians
	var forceMagnitude = (distance * 1.5) / speed;
	return [angleRadians,forceMagnitude,needAng];
}
function ForceAquire(c,data){
console.log(data)
	var [ang,img,force] = data
	var [angleRadians,forceMagnitude,needAng] = Force(c,ang,img,force)
	var forceX = forceMagnitude * Math.cos(angleRadians);
	var forceY = forceMagnitude * Math.sin(angleRadians);
	
	c.globalVars.forcey = forceY;
	c.globalVars.Forcex = forceX;
}
function Fire(g){
var [cannon,mortar,hawitzer] = Data()

	

var t = g.objects.TestObj.getAllInstances()
var bull = g.objects.Bullet
for(let i = 0; i < t.length;i++){
if(t[i].animationName == "Mortar") {
ForceAquire(g,mortar)
var b = bull.createInstance("Player",t[i].getImagePointX(1),t[i].getImagePointY(1))
}
if(t[i].animationName == "Cannon") {
ForceAquire(g,cannon)
var b = bull.createInstance("Player",t[i].getImagePointX(1),t[i].getImagePointY(1))
}
if(t[i].animationName == "Haw"){
ForceAquire(g,hawitzer)
var b = bull.createInstance("Player",t[i].getImagePointX(1),t[i].getImagePointY(1))

}
var forcex = g.globalVars.Forcex
var forcey = g.globalVars.forcey

if(g.objects.Player.getFirstInstance().width < 0){
	
	
		b.behaviors.Physics.applyForce(-forcex,-forcey)	
	

	}
else{
	
	
		b.behaviors.Physics.applyForce(forcex,-forcey)	
	
}

}

}
runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
	
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
	
});

async function OnBeforeProjectStart(runtime)
{
	// Code to run just before 'On start of layout' on
	// the first layout. Loading has finished and initial
	// instances are created and available to use here.
	
	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime,imp)
{
	
	
	
}



const scriptsInEvents = {

	async EventSheet1_Event11_Act1(runtime, localVars)
	{
		let a = runtime.objects.Positions.getFirstInstance()
		let test = runtime.objects.TestObj
		let player = runtime.objects.Player.getFirstInstance()
		for(let i = 0; i < 5;i++){
		console.log("Here: " , a.getAt(i,0,0))
		
		}
		
	},

	async EventSheet1_Event13_Act1(runtime, localVars)
	{
		let a = runtime.objects.Positions.getFirstInstance()
		let test = runtime.objects.TestObj
		let player = runtime.objects.Player.getFirstInstance()
		let b = runtime.globalVars.Indo
		let Imgp = runtime.globalVars.ImP
		console.log(runtime.globalVars.Indo, " Indo")
		if(a.getAt(b,0,0) != 0){
		var sub = test.createInstance("Player",player.getImagePointX(a.getAt(b,0,0)),player.getImagePointY(a.getAt(b,0,0)))
		console.log(a.getAt(b,1,0), "this")
		console.log(a.getAt(b,0,0), " Img")
		sub.setAnimation(a.getAt(b,1,0))
		runtime.globalVars.ImP = a.getAt(b,0,0)
		console.log(runtime.globalVars.ImP , " IMP")
		}else{
		console.log(a.getAt(b,0,0), " None")
		}
	},

	async Playercontroller_Event10_Act2(runtime, localVars)
	{
		Fire(runtime);
	},

	async Playercontroller_Event11_Act2(runtime, localVars)
	{
		Fire(runtime);
	},

	async Enemycontroller_Event3_Act1(runtime, localVars)
	{
		EnemyTorp(runtime);
	},

	async Enemycontroller_Event8_Act2(runtime, localVars)
	{
		Spawner(runtime);
	},

	async Snapgrid_Event2_Act2(runtime, localVars)
	{
		Pin(runtime)
	},

	async Snapgrid_Event3_Act3(runtime, localVars)
	{
		var obj = runtime.objects.TestObj.getAllInstances()
		var Start = runtime.objects.TestObj;
		var mouse = runtime.objects.Mouse
		var player = runtime.objects.Player.getFirstInstance();
		var imp = 0;
		var array = runtime.objects.Positions.getFirstInstance()
		var sel;
		for(let i = 0; i < obj.length;i++){
			var dist = Math.sqrt(Math.pow(mouse.getMouseX() - obj[i].x,2) + Math.pow(mouse.getMouseY() -obj[i].y,2));
			if( dist < 30 ){
				sel = obj[i]
				var d = Start.createInstance("Layer 0",sel.getImagePointX(1),sel.getImagePointY(1))
				d.setAnimation(sel.animationName)
				break;
			}
		}
	},

	async Snapgrid_Event6_Act2(runtime, localVars)
	{
		Snapp(runtime)
	},

	async Snapgrid_Event8_Act1(runtime, localVars)
	{
		let a = runtime.objects.Positions.getFirstInstance()
		let test = runtime.objects.TestObj
		let player = runtime.objects.Player.getFirstInstance()
		for(let i = 0; i < 5;i++){
		console.log("Here: " , a.getAt(i,0,0))
		if(a.getAt(i,0,0) != 0){
		console.log("Found" , a.getAt(i,0,0) )
		runtime.globalVars.Gold = runtime.globalVars.Gold + 20
		console.log(runtime.globalVars.Gold)
		a.setAt(0,i,0,0)
		a.setAt(0,i,1,0)
		}
		}
		
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

