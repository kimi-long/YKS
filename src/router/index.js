import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const index = r => require.ensure([], () => r(require('@/page/index')), 'index');
const yuyue = r => require.ensure([], () => r(require('@/page/yuyue')), 'yuyue');
const my = r => require.ensure([], () => r(require('@/page/my')), 'my');
const calendar = r => require.ensure([], () => r(require('@/page/calendar')), 'calendar');
const announcements = r => require.ensure([], () => r(require('@/page/announcements')), 'announcements');
const feedback = r => require.ensure([], () => r(require('@/page/feedback')), 'feedback');
const QA = r => require.ensure([], () => r(require('@/page/QA')), 'QA');
const setting = r => require.ensure([], () => r(require('@/page/setting')), 'setting');
const courses = r => require.ensure([], () => r(require('@/page/courses')), 'courses');
const lesson = r => require.ensure([], () => r(require('@/page/lesson')), 'lesson');
const card = r => require.ensure([], () => r(require('@/page/card')), 'card');
const teachers = r => require.ensure([], () => r(require('@/page/teachers')), 'teachers');
const card_detail = r => require.ensure([], () => r(require('@/page/card_detail')), 'card_detail');
const teachers_detail = r => require.ensure([], () => r(require('@/page/teachers_detail')), 'teachers_detail');
const courses_detail = r => require.ensure([], () => r(require('@/page/courses_detail')), 'courses_detail');
const comment = r => require.ensure([], () => r(require('@/page/comment')), 'comment');
const order = r => require.ensure([], () => r(require('@/page/order')), 'order');
const notice = r => require.ensure([], () => r(require('@/page/notice')), 'notice');
const allCard = r => require.ensure([], () => r(require('@/page/allCard')), 'allCard');
const yuekeCal = r => require.ensure([], () => r(require('@/page/yuekeCal')), 'yuekeCal');
const jifen = r => require.ensure([], () => r(require('@/page/jifen')), 'jifen');
const cd = r => require.ensure([], () => r(require('@/page/cd')), 'cd');


const routes = [
	{
		path: '/',
		component: index,
        meta: {

            title: ''
        }
	},
    {
        path: '/login',
        component: login,
        meta: {
            title: '登录'
        }
    },
    {
        path: '/yuyue',
        component: yuyue,
        meta: {
            title: '预约'
        }
    },
    {
        path: '/my',
        component: my,
        meta: {
            title: '我的'
        }
    },
    {
        path: '/calendar',
        component: calendar,
        meta: {
            title: '课程'
        }
    },
    {
        path: '/announcements',
        component: announcements,
        meta: {
            title: '公告'
        }
    },
    {
        path: '/notice',
        component: notice,
        meta: {
            title: '消息通知'
        }
    },
    {
        path: '/jifen',
        component: jifen,
        meta: {
            title: '积分'
        }
    },

    {
        path: '/feedback',
        component: feedback,
        meta: {
            title: '反馈问题'
        }
    },
    {
        path: '/QA',
        component: QA,
        meta: {
            title: '常见问题'
        }
    },
    {
        path: '/setting',
        component: setting,
        meta: {
            title: '设置'
        }
    },
    {
        path: '/courses',
        component: courses,
        meta: {
            title: '课程'
        }
    },
    {
        path: '/courses_detail',
        component: courses_detail,
        meta: {
            title: '课程详情'
        }
    },
    {
        path: '/card_detail',
        component: card_detail,
        meta: {
            title: '卡片详情'
        }
    },
    {
        path: '/card',
        component: card,
        meta: {
            title: '会员卡'
        }
    },
    {
        path: '/teachers',
        component: teachers,
        meta: {
            title: '老师'
        }
    },
    {
        path: '/teachers_detail',
        component: teachers_detail,
        meta: {
            title: '老师详情'
        }
    },

    {
        path: '/comment',
        component: comment,
        meta: {
            title: '评价'
        }
    },
    {
        path: '/order',
        component: order,
        meta: {
            title: '订单'
        }
    },
    {
        path: '/lesson',
        component: lesson,
        meta: {
            title: '课程'
        }
    },
    {
        path: '/yuekeCal',
        component: yuekeCal,
        meta: {
            title: '约课'
        }
    },

    {
        path: '/cd',
        component: cd,
        meta: {
            title: '反馈问题'
        }
    },
    {
        path: '/allCard',
        component: allCard,
        meta: {
            title: '全部卡片'
        }
    },


]

export default new Router({
	routes,
    strict: process.env.NODE_ENV !== 'production',
})
