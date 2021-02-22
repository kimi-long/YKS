<template>
    <div id="root">
        <div>
            <div class="ThemedWrapper-jd76ve-0 hnMLRX slide pop-enter-done">
                <div class="SignIn__SignInWrapper-u1qscc-0 jclfjH">
                    <div class="CustomSignIn__SignInWrapper-pwygxr-1 dyqwgx orange index">
                        <div class="logoWrapper">学员登录</div>
                        <div class="CustomSignIn__InputWrapper-pwygxr-2 jfCxwd phone orange index">
                            <div class="am-list-item am-input-item am-list-item-middle">
                                <div class="am-list-line">
                                    <div class="am-input-control"><input placeholder="输入手机号" maxlength="11" type="text"
                                                                         v-model="Phone"></div>
                                </div>
                            </div>
                        </div>
                        <div class="CustomSignIn__InputWrapper-pwygxr-2 jfCxwd smsCode orange index">
                            <div class="am-list-item am-input-item am-list-item-middle am-input-focus am-input-android">
                                <div class="am-list-line">
                                    <div class="am-input-control"><input placeholder="输入验证码" maxlength="6" type="text"
                                                                         v-model="code"></div>
                                    <div class="am-input-extra"><span
                                        class="CustomSignIn__Span-pwygxr-0 fkReTG orange index"><input type="button"
                                                                                                       id="btn"
                                                                                                       value="发送验证码"
                                                                                                       @click="clickCode($event)"/></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button role="button" @click="clickdenglu($event)"
                                class="am-button btn1 CustomButton__InnerButton-sc-1u03hwt-1 kmYrUL orange index radius am-button-small">
                            <span class="inner"><span class="myicon"></span>登录</span></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { getLocal,getStore,setStore } from '@/config/mUtils';
    import {send_verify,Stubinding} from  '../api/getData'
    export default {
        components: {},
        data() {
            return {
                Phone:'',
                code:'',
                countdown2:2,
                countdown:60,
            }
        },

        created() {
        },

        destroyed() {

        },

        mounted() {

        },
        computed: {},
        methods: {
            async send_verify() {
                // debugger;
                //this.loading = true;
                var  re = /^1\d{10}$/;
                if (re.test(this.Phone)) {
                    const crs = await send_verify({
                        code:2,
                        Phone:this.Phone,
                        StoresID:getStore('storesid'),
                    })
                    if(crs.orsuccess == "1"){
                        this.$message({
                            message: '发送成功',
                            type: 'success',
                            duration: 2000
                        });
                    }else {
                        this.$message({
                            message: crs.Msg,
                            type: 'error',
                            duration: 2000
                        });
                    }
                }else {
                    this.$message({
                        message: '请输入正确手机号码',
                        type: 'error',
                        duration: 2000
                    });
                }



            },
            async Stubinding(obj) {
                // debugger;
                //this.loading = true;
                if (this.code != '') {
                    this.settime2(obj);
                    const crs = await Stubinding({
                        openid:getStore('openid'),
                        wx_name:getStore('wx_name'),
                        wx_topimg:getStore('wx_topimg'),
                        Phone:this.Phone,
                        Code:this.code,
                        StoresID:getStore('storesid'),
                    })
                    if(crs.orsuccess == "1"){
                        setStore('token',crs.token);
                        setStore('StudentID',crs.StudentID);
                        this.$router.push({path:'/'})
                    }else {
                        this.$message({
                            message: crs.Msg,
                            type: 'error',
                            duration: 2000
                        });
                    }
                }else {
                    this.$message({
                        message: '请输入验证码',
                        type: 'error',
                        duration: 2000
                    });
                }



            },

            clickCode(obj){
                this.send_verify();
                this.settime(obj);
            },
            clickdenglu(obj){
                this.Stubinding(obj);

            },
            settime2(obj) {
                if (this.countdown2 == 0) {
                    obj.target.removeAttribute("disabled");
                    obj.target.setAttribute("class", 'am-button  btn1 CustomButton__InnerButton-sc-1u03hwt-1 kmYrUL orange index radius am-button-small');
                    this.countdown2 = 5;
                    return;
                } else {
                    obj.target.setAttribute("disabled", true);
                    obj.target.setAttribute("class", 'am-button am-button-disabled btn1 CustomButton__InnerButton-sc-1u03hwt-1 kmYrUL orange index radius am-button-small');
                    obj.value = "登录中";
                    this.countdown2--;
                }
                this.trunsettime2(obj);

            },
            trunsettime2(obj){
                let _this = this;
                setTimeout(function () {
                        _this.settime2(obj)
                    }
                    , 1000)
            },
            settime(obj) {
                    if (this.countdown == 0) {
                        obj.target.removeAttribute("disabled");
                        obj.target.value = "发送验证码";
                        this.countdown = 60;
                        return;
                    } else {
                        obj.target.setAttribute("disabled", true);
                        obj.target.value = "重新发送(" + this.countdown + ")";
                        this.countdown--;
                    }
                this.trunsettime(obj);
            },
            trunsettime(obj){
                let _this = this;
                setTimeout(function () {
                        _this.settime(obj)
                    }
                    , 1000)
            },
        }
    }

</script>

<style lang="less" scoped>

</style>
