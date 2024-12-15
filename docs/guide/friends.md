---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/122595923',
    name: 'bk-tshirt',
    title: '会长',
    links: [
      { icon: 'github', link: 'https://github.com/bk-tshirt' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/54230805',
    name: '山本小面包',
    title: '成员',
    links: [
      { icon: 'github', link: 'https://github.com/KuroNekoww' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/102855577',
    name: 'Ovoeing',
    title: '成员',
    links: [
      { icon: 'github', link: 'https://github.com/ovoeing' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/130219297',
    name: 'yizhixianyuuuu',
    title: '运维',
    links: [
      { icon: 'github', link: 'https://github.com/yizhixianyuuuu' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/52279718',
    name: 'Fuwaki',
    title: '朋友',
    links: [
      { icon: 'github', link: 'https://github.com/fuwaki' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/159421917',
    name: 'O&M',
    title: '社团运维组',
    links: [
      { icon: 'github', link: 'https://github.com/Sysyz-itcom' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      友情链接
    </template>
    <template #lead>
      这里有社团的朋友们！
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>