<template>
	
   <div class="step-container"  >
		<div class="progress-container">
			<div class="step-title-pan" >
				<div class="text-center step-text-pan" :class="[step == index? 'active': '',step > index? 'more': '']" v-for="(item,index) in stepArray">{{item}}</div>
			</div>
			<div class="line-pan">
				<div class="line-step">
					<span v-for="(item,index) in stepArray" >
						<div class="progress" :class="step >= index? 'active': ''" v-show='index!=0'></div>
						<div class="point" :class="step >= index? 'active': ''" ></div>		
					</span>
				</div>
				
			</div>
		</div>
   </div>
   
</template>

<script>

 export default {

  name : 'progressBar',

  data() {
    return {
    }
  },
	props : {
	   step : Number,
	   stepArray : Array
	},
  //数据预加载
  created : function(){

   

  },

  //声明方法
  methods : {
   
  },


 }
</script>

<style lang="scss" scoped>
	.step-container{
		padding: 12px;
		height: 54px;
		background-color: #fff;
		position: relative;
	}
	
	.progress-container{
		text-align: center;
		
	}
	.step-title-pan{
		display: inline;
		margin: 0px auto;
	}
	
	.line-pan{
		margin-left: 8%;
		margin-right: 8%;
		
	}
	
	.step-text-pan{
		font-size: 10px;
		width: 20%;
		padding: 2px 0px;
		display: inline-block;
		border-radius: 14px;
		color: #666666;
		text-align: center;
		
	}
	.step-text-pan.active{
		background-image: url(../../assets/images/other/Process@2x.png);
		background-size: 100% 101%;
		color: #fff;
		margin-top: -6px;
		padding-bottom: 12px;;
	}
	.step-text-pan.more{
		color: #4c62e7;
	}
	
		.grey{
			color: #666666;
		}
		.field_container{
			padding: 10px 16px;;
		}
		.area_select{
				padding-left: 4px;
		}
		.area_select_pan{
			position: absolute;
			bottom: 10px;
			width: 100%;
		}
		.van-field .van-cell__value{
			border: 1px solid lightgray;
			background-color: red;
		}
		.theme_color{
			color:#4c62e7;
		}
		.logo{
				width: 22px;
				height: 24px;
				vertical-align: top;
			}
			h3,h4{
				margin: 0px;;
			}
			.line{
				border-bottom: 1px solid #dddddd;
			}
			.success-pan{
				min-height: 300px;
				background-color: #fff;
				position: relative;
			}
			.jyButton{
				color: #fff;
				width: 260px;
				height: 38px;
				line-height: 38px;
				text-align: center;
				background-image: url(../../assets/images/other/Mainbutton@2x.png);
				background-size: 100% 100%;
				position: absolute;
				bottom: -60px;
				left: 50%;
				margin-left: -130px;
				font-weight: bold;	
			}
			.line-step{
				display: inline-block;
				width: 100%;
			}
			.point{
				width: 16px;
				height: 16px;
				background-color: #999999;
			
				border-radius: 8px;
				display: inline-block;
			}
			.point.active{
				width: 16px;
				height: 16px;
				background-image: url(../../assets/images/24/Navigationcircle@2x.png);
				background-size: 100%;
				border-radius: 8px;
				display: inline-block;
			}
			
			.progress{
				background-color: #999999;
				display: inline-block;
				width: 18%;
				height: 2px;
				margin: 7px 0px;
				
			}
			.progress.active{
				background-image: url(../../assets/images/Label2@2x.png);
				background-size: 100%;
			}
</style>