<template>
    <div id="root">
        <div v-loading="loading"   element-loading-custom-class="loading_color" element-loading-spinner="el-icon-loading">
            <div class="ThemedWrapper-jd76ve-0 hnMLRX slide pop-enter-done">
                <div class="am-modal-mask" style="display:none" id="modphonebox">
                    <div class="am-modal-wrap " role="dialog" aria-labelledby="绑定手机">
                        <div role="document" class="am-modal am-modal-transparent">
                            <div class="am-modal-content">
                                <div class="am-modal-header">
                                    <div class="am-modal-title">绑定手机</div>
                                </div>
                                <div class="am-modal-body">
                                    <div class="am-modal-propmt-content">
                                        <div>修改您的联系方式
                                            <div class="am-modal-input-container">
                                                <div class="am-modal-input"><label><input type="text" placeholder=""
                                                                                          value="15805604207"></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="am-modal-footer">
                                    <div class="am-modal-button-group-h am-modal-button-group-normal" role="group"><a
                                        class="am-modal-button" role="button">取消</a><a class="am-modal-button"
                                                                                       role="button">确定</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="am-modal-mask" v-if="showName" id="modnicbox">
                    <div class="am-modal-wrap " role="dialog" aria-labelledby="姓名">
                        <div role="document" class="am-modal am-modal-transparent">
                            <div class="am-modal-content">
                                <div class="am-modal-header">
                                    <div class="am-modal-title">姓名</div>
                                </div>
                                <div class="am-modal-body">
                                    <div class="am-modal-propmt-content">
                                        <div>修改您的姓名
                                            <div class="am-modal-input-container">
                                                <div class="am-modal-input">
                                                    <label>
                                                        <input type="text" placeholder="" v-model="SnameCopy">
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="am-modal-footer">
                                    <div class="am-modal-button-group-h am-modal-button-group-normal" role="group"><a
                                        class="am-modal-button" role="button" @click="showName = false">取消</a><a class="am-modal-button"
                                                                                       role="button" @click="changeName">确定</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="am-modal-mask" id="modintro" style="display: none;">
                    <div class="am-modal-wrap am-modal-wrap-popup" role="dialog">
                        <div role="document" style="position: fixed;"
                             class="am-modal am-modal-popup am-modal-popup-slide-up">
                            <div class="am-modal-content">
                                <div class="am-modal-body">
                                    <div class="MyIntroductionEdit__TextareaWrapper-sc-1ak9571-0 iVteuK">
                                        <div class="am-list-item am-textarea-item am-textarea-has-count">
                                            <div class="am-textarea-control"><textarea maxlength="20" rows="3"
                                                                                       placeholder="请输入20个字以内个性签名..."></textarea>
                                            </div>
                                            <span class="am-textarea-count"><span>0</span>/20</span></div>
                                        <a role="button"
                                           class="am-button CustomButton__InnerButton-sc-1u03hwt-1 dhkNjs themed radius am-button-small"
                                           aria-disabled="false"><span class="inner">确定</span></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="am-modal-mask" id="signoutbox" style="display: none;">
                    <div class="am-modal-wrap " role="dialog" aria-labelledby="即将退出">
                        <div role="document" class="am-modal am-modal-transparent">
                            <div class="am-modal-content">
                                <div class="am-modal-header">
                                    <div class="am-modal-title">即将退出</div>
                                </div>
                                <div class="am-modal-body">
                                    <div class="am-modal-alert-content">是否确认退出?</div>
                                </div>
                                <div class="am-modal-footer">
                                    <div class="am-modal-button-group-h am-modal-button-group-normal" role="group"><a
                                        class="am-modal-button" role="button">取消</a><a class="am-modal-button"
                                                                                       role="button">确认</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section style="padding: 3px 0px; width: 100%;"></section>
                <div><input type="file" accept="image/*" class="ImageUploader__Input-sc-105xwjj-0 jYQbvb">
                    <div class="ImageUploader__Preview-sc-105xwjj-1 hfsyfG" style="display: none;">
                        <div class="CdnImage__ImageWithBackground-sc-1pzwnhb-0 cksErA" style="display: none;"></div>
                        <div class="tips">点击上传</div>
                    </div>
                </div>
                <div class="SettingRow__Row-c61a8n-0 hTAFug avatar"><span>
                    <img v-if="numberInfo.HeadUrl !=''" :src="numberInfo.HeadUrl" class="avatar" style="height: 38px; width: 38px; border-radius: 50%; visibility: visible;">
                    <img v-else src="../../static/images/redstyle/moren.png" class="avatar" style="height: 38px; width: 38px; border-radius: 50%; visibility: visible;">
                </span>
                    <div><span class="oneLine value-preview">修改头像</span>
                        <input type="file" @change="uploadImg" accept="image/*" class="ImageUploader__Input-sc-105xwjj-0 jYQbvb"/>
                        <i class="am-icon am-icon-right am-icon-md"></i>
                    </div>
                </div>
                <div class="SettingRow__Row-c61a8n-0 hTAFug"><span>手机</span>
                    <div><span class="oneLine value-preview">{{phone}}</span>
<!--                        <i class="am-icon am-icon-right am-icon-md"></i>-->
                    </div>
                </div>
                <div class="SettingRow__Row-c61a8n-0 hTAFug modnicbtn"><span>姓名</span>
                    <div @click="showName = true,SnameCopy = Sname"><span class="oneLine value-preview">{{Sname}}</span><i
                        class="am-icon am-icon-right am-icon-md"></i></div>
                </div>
                <div>
                    <div class="SettingRow__Row-c61a8n-0 hTAFug modsexbtn"><span>性别</span>
                        <div>
                            <span class="oneLine value-preview">
                                <span @click="show = true">
                                    {{sex}}
                                </span>
                        </span>
                            <i class="am-icon am-icon-right am-icon-md"></i></div>
                    </div>
                </div>
                <div>
                    <div class="SettingRow__Row-c61a8n-0 hTAFug modbirthbtn"><span>生日</span>
                        <div><span class="oneLine value-preview">
<!--                            <input class="weui-input" type="text" style="text-align:right" placeholder="请选择" id='datetime-picker' v-model="birthDay" @focus="show2 = true"/>-->
                            <span class="weui-input" @click="show2 = true" style="text-align:right">{{birthDay}}</span>
                        </span><i
                            class="am-icon am-icon-right am-icon-md"></i></div>
                    </div>
                </div>
                <div class="MySettings__LogoutWrapper-sc-16mql2h-0 hjzGIg" @click="show3show">切换账号</div>
                <!--                <div class="SettingRow__Row-c61a8n-0 hTAFug modintrobtn"><span>简介</span><div><span class="oneLine value-preview">未设置</span><i class="am-icon am-icon-right am-icon-md"></i></div></div>-->
                <!--<div class="MySettings__LogoutWrapper-sc-16mql2h-0 hjzGIg signoutbtn">退出登录</div>-->
            </div>
            <van-action-sheet v-model="show" :actions="actions" @select="onSelect" cancel-text="取消"
                              close-on-click-action/>
            <van-action-sheet v-model="show2">
                <div class="content">
                    <van-datetime-picker
                        v-model="currentDate"
                        type="date"
                        title="选择生日"
                        :min-date="minDate"
                        :max-date="maxDate"
                        @confirm="changeBirth"
                        @cancel="show2 = false"
                    />
                </div>
            </van-action-sheet>
        </div>
        <div class="Navigation__NavigationWrapper-sc-163do31-0 heqysv react-draggable">
            <div class="Navigation__PageRedirectWrapper-sc-163do31-1 begceX">
                <div class="back" onclick="javascript:history.go(-1)"><i
                    class="icon am-icon am-icon-index-goback am-icon-s"></i></div>
            </div>
            <div class="Navigation__PageRedirectWrapper-sc-163do31-1 begceX">
                <div class="home" @click="toIndex"><i class="icon am-icon am-icon-index-home am-icon-s"></i></div>
            </div>
            <van-dialog v-model="show3" title="切换用户" show-cancel-button @confirm="getStudentInfo2">
                <van-radio-group v-model="changeradio" >
                    <div  v-for="(item,index) in memberList" style="margin-left: 10px">
                        <van-radio :name="item.ID">
                            <span style="display:inline-block;width:35px;height:35px;border-radius: 50%;overflow: hidden;position: relative;top: 2px;">
                               <img :src="item.HeadUrl" alt="" v-if="item.HeadUrl" >
                              <img src="../../static/images/redstyle/moren.png" alt="" v-else>
                            </span>
                            <span style="position: relative;top: -8px;">
                                {{item.Name}}
                            </span>

                        </van-radio>
                    </div>


                </van-radio-group>

            </van-dialog>
        </div>
    </div>
</template>

<script>
    import {Toast} from 'vant';
    import {getStore,setStore} from '@/config/mUtils';
    import {editStuBirthday, editStuSex, editStuName,editStuHeadUrl,getStudentInfo,getListMembers} from '../api/getData'
    export default {
        components: {},
        data() {
            return {
                minDate: new Date(1900, 0, 1),
                maxDate: new Date(),
                currentDate: new Date(),
                sex: "",
                phone: "",
                Sname: "111",
                SnameCopy: "",
                birthDay: "",
                show: false,
                show2: false,
                show3: false,
                showName: false,
                actions: [{name: '男'}, {name: '女'}],
                headURL:"",
                loading:true,
                numberInfo:[],
                memberList:[],
                changeradio:getStore('StudentID'),
            }
        },

        created() {
            this.getStudentInfo();

        },
        destroyed() {

        },

        mounted() {
            $('.modphonebtn,#modphonebox .am-modal-button').click(function () {
                $('#modphonebox').toggle();
            });
            $('.modnicbtn,#modnicbox .am-modal-button').click(function () {
                $('#modnicbox').toggle();
            });
            $('.modintrobtn,#modintro .am-button').click(function () {
                $('#modintro').toggle();
            });
            $('.signoutbtn,#signoutbox .am-button-small').click(function () {
                $('#signoutbox').toggle();
            });

            // $("#datetime-picker").calendar();

            // $("#sex").picker({
            //     title: "请选择性别",
            //     cols: [
            //         {
            //             textAlign: 'center',
            //             values: ['男生', '女生']
            //         }
            //     ],
            //     onChange: function(p, v, dv) {
            //         console.log(p, v, dv);
            //     },
            //     onClose: function(p, v, d) {
            //         console.log("close");
            //     }
            // });
        },
        computed: {},
        methods: {
            show3show(){
                this.show3 = true;
                this.changeradio = getStore('StudentID');
            },
            async getStudentInfo2() {
                // debugger;
                this.loading = true;
                const crs = await getStudentInfo({
                    StudentID:this.changeradio,
                })
                if(crs.orsuccess == "1"){
                    this.$message({
                        message: '切换成功',
                        type: 'success',
                        duration: 2000
                    });
                    setStore('StudentID',this.changeradio)
                    this.loading = false;
                    this.numberInfo = crs.data;
                    this.phone = crs.data.Phone;
                    this.birthDay = crs.data.Birthday;
                    this.Sname = crs.data.Name;
                    if(crs.data.Sex == '1'){
                        this.sex = '男'
                    }else if(crs.data.Sex == '2'){
                        this.sex = '女'
                    }

                }else {
                    this.loading = false;
                    this.$message({
                        message: crs.Msg,
                        type: 'error',
                        duration: 2000
                    });
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
                    this.phone = crs.data.Phone;
                    this.birthDay = crs.data.Birthday;
                    this.Sname = crs.data.Name;
                    if(crs.data.Sex == '1'){
                        this.sex = '男'
                    }else if(crs.data.Sex == '2'){
                        this.sex = '女'
                    }
                    this.getListMembers();
                }else {
                    this.loading = false;
                    this.$message({
                        message: crs.Msg,
                        type: 'error',
                        duration: 2000
                    });
                }

            },
            uploadImg:function(e){
                let file=e.target.files[0];
                this.headURL = '';
                let reader = new FileReader();
                reader.readAsDataURL(file);
                let that=this;
                reader.onload = function (e) {
                    that.headURL='data:image/jpg;base64,'+ this.result.substring(this.result.indexOf(',')+1);
                    // that.imgUrl='data:image/png;base64,'+url
                    // that.$refs['imgimg'].setAttribute('src','data:image/png;base64,'+url);
                    // that.imgUrl.push({
                    //     id:that.imgUrl.length+1,
                    //     url:'data:image/png;base64,'+url
                    // })
                    that.editStuHeadUrl(that.headURL);
                }

                // this.$axios.post(
                //     url,
                //     formdata,
                //     {headers:{ 'Content-Type':'multipart/form-data' }}).then(res=>{
                //     console.log(res,'upolad img')
                // }).catch(err=>{})
            },
            async editStuHeadUrl(data) {
                this.loading = true;
                const crs = await editStuHeadUrl({
                    StoresID:getStore('storesid'),
                    StudentID:getStore('StudentID'),
                    imgdate: data,
                })
                if (crs.orsuccess == "1") {
                    this.loading = false;
                    this.$message({
                        message: '修改成功',
                        type: 'success',
                        duration: 2000
                    });
                    this.getStudentInfo();
                } else {
                    this.loading = false;
                    this.$message({
                        message: crs.Msg,
                        type: 'error',
                        duration: 2000
                    });
                }

            },
            changeName(){
                this.showName = false;
                this.editStuName(this.SnameCopy);
            },
            onSelect(item) {
                this.sex = item.name;
                this.show = false;
                if (this.sex == '男') {
                    this.editStuSex(1);
                } else {
                    this.editStuSex(2);
                }

            },
            changeBirth() {
                console.log(this.currentDate);
                let year = this.currentDate.getFullYear();
                let month = this.currentDate.getMonth() + 1;
                let day = this.currentDate.getDate();
                this.birthDay = year + "-" + month + "-" + day;
                this.show2 = false;
                this.editStuBirthday(this.birthDay);
            },
            async editStuSex(data) {
                this.loading = true;
                const crs = await editStuSex({
                    StoresID:getStore('storesid'),
                    Sex: data,
                    StudentID:getStore('StudentID'),
                })
                if (crs.orsuccess == "1") {
                    this.loading = false;
                    this.$message({
                        message: '修改成功',
                        type: 'success',
                        duration: 2000
                    });
                    this.getStudentInfo();
                } else {
                    this.loading = true;
                    this.$message({
                        message: crs.Msg,
                        type: 'error',
                        duration: 2000
                    });
                }

            },
            async editStuBirthday(data) {
                this.loading = true;
                const crs = await editStuBirthday({
                    StoresID:getStore('storesid'),
                    Birthday: data,
                    StudentID:getStore('StudentID'),
                })
                if (crs.orsuccess == "1") {
                    this.loading = false;
                    this.$message({
                        message: '修改成功',
                        type: 'success',
                        duration: 2000
                    });
                    this.getStudentInfo();
                } else {
                    this.loading = false;
                    this.$message({
                        message: crs.Msg,
                        type: 'error',
                        duration: 2000
                    });
                }

            },
            async editStuName(data) {
                this.loading = true;
                const crs = await editStuName({
                    StoresID:getStore('storesid'),
                    Name: data,
                    StudentID:getStore('StudentID'),
                })
                if (crs.orsuccess == "1") {
                    this.loading = false;
                    this.Sname = this.SnameCopy;
                    this.$message({
                        message: '修改成功',
                        type: 'success',
                        duration: 2000
                    });
                    this.getStudentInfo();
                } else {
                    this.loading = false;
                    this.$message({
                        message: crs.Msg,
                        type: 'error',
                        duration: 2000
                    });
                }

            },
            async getListMembers() {
                const crs = await getListMembers({
                    StoresID:getStore('storesid'),
                    StudentID:getStore('StudentID'),
                    isMain:this.numberInfo.isMain
                })
                if (crs.orsuccess == "1") {
                    this.memberList = crs.data;
                } else {
                    this.$message({
                        message: crs.Msg,
                        type: 'error',
                        duration: 2000
                    });
                }

            },


            toIndex() {
                this.$router.push({path: '/'})
            },

        }
    }

</script>

<style lang="less" scoped>

</style>
