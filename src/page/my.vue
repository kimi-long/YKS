<template>
    <div id="root">
        <div v-loading="loading"   element-loading-custom-class="loading_color" element-loading-spinner="el-icon-loading">
            <div class="ThemedWrapper-jd76ve-0 iIQNKn">
                <div class="navbarWrapper">
                    <div class="am-tab-bar">
                        <div class="am-tabs am-tabs-horizontal am-tabs-bottom">
                            <div class="am-tabs-content-wrap" style="position: relative;">
                                <div class="am-tabs-pane-wrap am-tabs-pane-wrap-active" role="tabpanel"
                                     aria-hidden="false" aria-labelledby="m-tabs-0-4">
                                    <div class="am-tab-bar-item">
                                        <div class="MeShow__CustomUserCard-sc-12oovfw-0 lkKGrF">
                                            <section class="user" >
                                                <img v-if="numberInfo.HeadUrl !=''"
                                                :src="numberInfo.HeadUrl"
                                                style="visibility: visible;">
                                                <img v-else
                                                     src="../../static/images/redstyle/moren.png"
                                                     style="visibility: visible;">
                                                <div class="text" style="justify-content: center !important;">
                                                    <div class="name-wrapper">
                                                        <span class="oneLine name fontBold" v-if="numberInfo.Name !=''">{{numberInfo.Name}}</span>
                                                        <span class="oneLine name fontBold" v-else>{{numberInfo.wxName}}</span>

                                                        <span  @click="tojifen" class="oneLine name" v-if="numberInfo.isjifen">我的积分:{{numberInfo.integral}}<i class="iconfont icon-you"></i></span>
                                                    </div>

                                                </div>

                                            </section>
                                            <section class="entries">
                                                <div class="entry-wrapper"
                                                     @click="toorder">
                                                    <div class="icon-wrapper"><i
                                                        class="icon am-icon am-icon-my-order"></i></div>
                                                    <span class="entry-name">订单</span>
                                                </div>
                                                <div class="entry-wrapper"
                                                     @click="tocard">
                                                    <div class="icon-wrapper"><i
                                                        class="icon am-icon am-icon-my-course-card"></i></div>
                                                    <span class="entry-name">会员卡</span>
                                                </div>
                                                <div class="entry-wrapper" @click="toyuyue">
                                                    <div class="icon-wrapper"><i
                                                        class="icon am-icon am-icon-my-appointment"></i></div>
                                                    <span class="entry-name">已预约</span>
                                                </div>
                                                <div class="entry-wrapper" @click="tocomment">
                                                    <div class="icon-wrapper"><i
                                                        class="icon am-icon am-icon-my-comment"></i></div>
                                                    <span class="entry-name">评价</span>
                                                </div>
                                            </section>
                                        </div>
                                        <div class="MeShow__RowWrapper-sc-12oovfw-1 bhafBR first"
                                             @click="toannouncements">
                                            <div><i class="icon am-icon icon am-icon-notification"></i><span
                                                class="content">消息通知</span></div>
                                            <div><i class="icon am-icon arrow am-icon-arrow-right"></i></div>
                                        </div>
                                        <div class="MeShow__RowWrapper-sc-12oovfw-1 bhafBR" @click="tofeedback">
                                            <div><i class="icon am-icon icon am-icon-feedback"></i><span
                                                class="content">反馈问题</span></div>
                                            <div><i class="icon am-icon arrow am-icon-arrow-right"></i></div>
                                        </div>
                                        <div class="MeShow__RowWrapper-sc-12oovfw-1 bhafBR" @click="toQA">
                                            <div><i class="icon am-icon icon am-icon-help"></i><span class="content">常见问题</span>
                                            </div>
                                            <div><i class="icon am-icon arrow am-icon-arrow-right"></i></div>
                                        </div>
                                        <div class="MeShow__RowWrapper-sc-12oovfw-1 bhafBR first" @click="tosetting">
                                            <div><i class="icon am-icon icon am-icon-new-setting"></i><span
                                                class="content">设置</span></div>
                                            <div><i class="icon am-icon arrow am-icon-arrow-right"></i></div>
                                        </div>
                                        <div class="MeShow__Tip-sc-12oovfw-2 cUhhBH">
                                            <div class="EmptyHolder__BottomLineWrapper-k5v4ua-2 bnWMth"><span><span
                                                class="bingcao-text"><span class="color-font">智火约课</span>
                                                        提供技术支持</span></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <bottom-Bar :index="indexNum"></bottom-Bar>
                            <!--                            <div class="am-tabs-tab-bar-wrap">-->
                            <!--                                <div class="am-tab-bar-bar bottom" >-->
                            <!--                                    <div class="am-tab-bar-tab" onclick="javascript:window.location.href='index.html'">-->
                            <!--                                        <div class="am-tab-bar-tab-icon" >-->
                            <!--                                            <div class="IndexNavBar__BadgeWrapper-zp8p8u-1 fXTpFr"><i-->
                            <!--                                                class="icon am-icon am-icon-homepage am-icon-s"></i></div>-->
                            <!--                                        </div>-->
                            <!--                                        <p class="am-tab-bar-tab-title" >首页</p>-->
                            <!--                                    </div>-->
                            <!--                                    <div class="am-tab-bar-tab" onclick="javascript:window.location.href='calendar.html'">-->
                            <!--                                        <div class="am-tab-bar-tab-icon" >-->
                            <!--                                            <div class="IndexNavBar__BadgeWrapper-zp8p8u-1 fXTpFr"><i-->
                            <!--                                                class="icon am-icon am-icon-timetable am-icon-s"></i></div>-->
                            <!--                                        </div>-->
                            <!--                                        <p class="am-tab-bar-tab-title" >课表</p>-->
                            <!--                                    </div>-->
                            <!--                                    <div class="am-tab-bar-tab" onclick="javascript:window.location.href='yuyue.html'">-->
                            <!--                                        <div class="am-tab-bar-tab-icon">-->
                            <!--                                            <div class="IndexNavBar__BadgeWrapper-zp8p8u-1 fXTpFr"><i-->
                            <!--                                                class="icon am-icon am-icon-appointment am-icon-s"></i></div>-->
                            <!--                                        </div>-->
                            <!--                                        <p class="am-tab-bar-tab-title">预约</p>-->
                            <!--                                    </div>-->
                            <!--                                    <div class="am-tab-bar-tab current" onclick="javascript:window.location.href='my.html'">-->
                            <!--                                        <div class="am-tab-bar-tab-icon">-->
                            <!--                                            <div class="IndexNavBar__BadgeWrapper-zp8p8u-1 fXTpFr"><i-->
                            <!--                                                class="icon am-icon am-icon-me am-icon-s"></i></div>-->
                            <!--                                        </div>-->
                            <!--                                        <p class="am-tab-bar-tab-title">我的</p>-->
                            <!--                                    </div>-->
                            <!--                                </div>-->
                            <!--                            </div>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import bottomBar from "../components/bottomBar";
    import {getStore,setStore} from '@/config/mUtils';
    import {
        getStudentInfo, getToken, StudentLogin
    } from '../api/getData'
    export default {
        components: {bottomBar},
        data() {
            return {
                indexNum: 4,
                loading:true,
                numberInfo:{}
            }
        },

        created() {
            if(getStore('StudentID') == '0'){
                this.$router.push({path: '/login'})
            }else {
                this.getStudentInfo();
            }

        },

        destroyed() {

        },

        mounted() {

        },
        computed: {},
        methods: {
            async getToken() {
                // debugger;
                setStore('storesid',this.$route.query.storesid);
                this.loading = true;
                const crs = await getToken({
                    StoresID:this.$route.query.storesid,
                    openid:this.$route.query.openid,
                })
                if(crs.orsuccess == "1"){
                    setStore('token',crs.token);
                    setStore('StudentID',crs.StudentID);
                    setStore('openid',crs.data.openid);
                    setStore('wx_name',crs.data.wx_name);
                    setStore('wx_topimg',crs.data.wx_topimg);
                    if(getStore('StudentID') == '0'){
                        this.$router.push({path: '/login'})
                    }else {
                        this.getStudentInfo();
                    }
                }else {
                    if(crs.Msg !='用户不存在' ){
                        this.$message({
                            message: crs.Msg,
                            type: 'error',
                            duration: 2000
                        });
                    }

                    this.$router.push({path: '/login'})
                }
            },
            async getStudentInfo() {
                // debugger;
                this.loading = true;
                const crs = await getStudentInfo({
                    StudentID:getStore('StudentID'),
                })
                if(crs.orsuccess == "1"){
                    this.loading = false;
                    this.numberInfo = crs.data;
                }else if(crs.orsuccess =='-98'){
                    this.getToken();
                }else {
                    this.loading = false;
                    this.$message({
                        message: crs.Msg,
                        type: 'error',
                        duration: 2000
                    });
                }

            },
            tocomment() {
                this.$router.push({path: '/comment'})
            },
            tocard() {
                this.$router.push({path: '/card'})
            },
            toorder() {
                this.$router.push({path: '/order'})
            },
            tojifen() {
                this.$router.push({path: '/jifen'})
            },
            toyuyue() {
                this.$router.push({path: '/yuyue'})
            },
            toannouncements() {
                this.$router.push({path: '/notice'})
            },
            tofeedback() {
                this.$router.push({path: '/feedback'})
            },
            toQA() {
                this.$router.push({path: '/QA'})
            },
            tosetting() {
                this.$router.push({path: '/setting'})
            },
        }
    }

</script>

<style lang="less" scoped>

</style>
