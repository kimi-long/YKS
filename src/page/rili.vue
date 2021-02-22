<!--
	参数说明：
	:visible.sync	是否显示
	format="YY-MM-DD"	确认日期时，回调事件返回的日期格式。如“YY/MM/DD hh:mm” 、“YY 年 MM 月第 DD 天，当前时间 hh 时 mm 分”
	:showTodayButton="false"  是否显示返回今日按钮
	:disabledWeekView="true"
	:disabled-date="disabledDate"	禁用的日期
	pickerType="date"			选择器类型 datetime：日期+时间 date：日期 time：时间
	:defaultDatetime="time"		指定默认时间。中国标准时间
 -->
<template>
    <div class="train_time">
        <vue-hash-calendar
            weekStart="monday"
            :visible.sync="time_show"
            :isShowWeekView="zhankai"
            :showTodayButton="false"
            format="YY-MM-DD"
            pickerType="date"
            :defaultDatetime="time"
            @change="dateChange"
        >
            <div slot="week" slot-scope="scope">
                <div>周{{scope.week}}</div>
            </div>
        </vue-hash-calendar>
        <div class="kaitext" @click="zhankaita" v-if="zhankai"><i class="iconfont icon-shang"></i></div>
        <div class="kaitext" @click="guanshangta" v-else><i class="iconfont icon-xia"></i></div>
    </div>
</template>
<script>
    export default {
        props: {

        },
        data() {
            return {
                zhankai:true,
                time_show:true,
                time:new Date(),//只接受中国标准时间
            }
        },
        mounted() {
            if(localStorage.getItem('time')){
                this.time = this.formatterDate(localStorage.getItem('time'))
            }else{
                this.time = new Date();
            }
        },
        methods: {
            zhankaita(){
                this.zhankai = false;
            },
            guanshangta(){
                this.zhankai = true;
            },
            //dateChange: 是父组件指定的传数据绑定的函数，date:子组件给父组件传递的数据
            dateChange(date) {
                this.$emit('dateChange',date);
            },
            //日期转中国标准时间
            formatterDate (date) {
                let result = new Date(date);
                return result;
            }
        },
    }

</script>
<style scoped lang="less">
    .kaitext{
        width: 100%;
        background-color:#fff;
        text-align: center;
        position: relative;
        z-index: 20;
    }
</style>
