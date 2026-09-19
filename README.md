<h1 align="center">👋 Hi I'm Ming</h1>

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&size=30&weight=900&duration=3000&pause=1000&color=EFC7F7&center=true&vCenter=true&random=false&width=1024&lines=%E6%88%91%E5%8F%AA%E6%98%AF%E5%80%8B%E8%88%88%E8%B6%A3%E4%BD%BF%E7%84%B6%E7%9A%84%E5%B7%A5%E7%A8%8B%E5%B8%AB)](https://git.io/typing-svg)

- **Open Source Contributor** to [NestJS Core](https://github.com/nestjs/nest) (PRs [#17668](https://github.com/nestjs/nest/pull/17668), [#17781](https://github.com/nestjs/nest/pull/17781), [#17797](https://github.com/nestjs/nest/pull/17797))
- All of my projects are available at [Ming's Projects](https://www.minglin.vip/projects)
- Know about my experiences [Ming's Resume](https://www.minglin.vip/Ming's%20Resume.pdf)

<h3 align="left">Open Source Contributions</h3>

<p>
  <a href="https://github.com/nestjs/nest/pull/17781" target="_blank">
    <img src="https://img.shields.io/badge/NestJS_Microservices-PR_%2317781_Merged-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS PR #17781 Merged" />
  </a>
  <a href="https://github.com/nestjs/nest/pull/17797" target="_blank">
    <img src="https://img.shields.io/badge/NestJS_Microservices-PR_%2317797_Merged-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS PR #17797 Merged" />
  </a>
  <a href="https://github.com/nestjs/nest/pull/17668" target="_blank">
    <img src="https://img.shields.io/badge/NestJS_Common-PR_%2317668_Merged-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS PR #17668 Merged" />
  </a>
</p>

Three PRs merged into [nestjs/nest](https://github.com/nestjs/nest) master.

**`@nestjs/microservices` — tracing spans left open on failure paths**

- [**#17781**](https://github.com/nestjs/nest/pull/17781) — When a message handler threw, NestJS skipped the hook that closes the tracing span: the failures you most need to trace left no telemetry, and each one stayed in memory for good. The one-shot guard added on the base `Server` class is today the only place in the package where that hook is called — Nest's author reused it across five transports in #17794.
- [**#17797**](https://github.com/nestjs/nest/pull/17797) — Three more of the same on Kafka's request-response path. The worst leaked one span per retry, so the longer a downstream service stayed down, the faster memory grew.

**`@nestjs/common` — a pipe that rejected every valid value**

- [**#17668**](https://github.com/nestjs/nest/pull/17668) — `ParseEnumPipe` returned `400` for every member of a numeric enum, because HTTP params arrive as strings and the check compared `'0'` against `0`.

→ [**How I found and fixed each one**](https://www.minglin.net/projects)

<h3 align="left">On My Medium</h3>

<!-- MEDIUM-POST-LIST:START -->
- [轉生為軟體工程師兩年以後的我：離開舒適圈，重新定義工程師價值](https://medium.com/@MingLin1995/%E8%BD%89%E7%94%9F%E7%82%BA%E8%BB%9F%E9%AB%94%E5%B7%A5%E7%A8%8B%E5%B8%AB%E5%85%A9%E5%B9%B4%E4%BB%A5%E5%BE%8C%E7%9A%84%E6%88%91-%E9%9B%A2%E9%96%8B%E8%88%92%E9%81%A9%E5%9C%88-%E9%87%8D%E6%96%B0%E5%AE%9A%E7%BE%A9%E5%B7%A5%E7%A8%8B%E5%B8%AB%E5%83%B9%E5%80%BC-e4d49934383d?source=rss-c2fe90462a50------2)
- [Kubernetes（K8s）從觀念到實戰：學習筆記](https://medium.com/@MingLin1995/kubernetes-k8s-%E5%BE%9E%E8%A7%80%E5%BF%B5%E5%88%B0%E5%AF%A6%E6%88%B0-%E5%AD%B8%E7%BF%92%E7%AD%86%E8%A8%98-f99b31c31cf3?source=rss-c2fe90462a50------2)
- [轉生為軟體工程師一年後的我](https://medium.com/@MingLin1995/%E8%BD%89%E7%94%9F%E7%82%BA%E8%BB%9F%E9%AB%94%E5%B7%A5%E7%A8%8B%E5%B8%AB%E4%B8%80%E5%B9%B4%E5%8D%8A%E4%BB%A5%E5%BE%8C%E7%9A%84%E6%88%91-6d23c410d42a?source=rss-c2fe90462a50------2)
- [Docker & Docker-Compose 基本用法](https://medium.com/@MingLin1995/docker-docker-compose-%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95-c86f7ddd15b1?source=rss-c2fe90462a50------2)
- [AWS — EC2 AMI 資料備份與移轉教學](https://medium.com/@MingLin1995/aws-ec2-ami-%E8%B3%87%E6%96%99%E5%82%99%E4%BB%BD%E8%88%87%E7%A7%BB%E8%BD%89%E6%95%99%E5%AD%B8-85dad6cf0b2d?source=rss-c2fe90462a50------2)
<!-- MEDIUM-POST-LIST:END -->

More on [Ming's Medium](https://medium.com/@MingLin1995)

<h3 align="left">Connect With Me</h3>

[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin&logoColor=white&link=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fyouminglin%2F)](https://www.linkedin.com/in/youminglin/)
[![Gmail Badge](https://img.shields.io/badge/Gmail-red?style=flat&logo=gmail&logoColor=white)](mailto:ben014335@gmail.com)

<h3 align="left">Main Technologies Used</h3>

[![My Skills](https://skillicons.dev/icons?i=nestjs,postgres,prisma,redis,docker,aws,linux)](https://skillicons.dev)

<h3 align="left">Backend Skills</h3>

[![Backend Skills](https://skillicons.dev/icons?i=bun,nodejs,express,py,flask,mongodb,mysql,jest)](https://skillicons.dev)

<h3 align="left">DevOps Skills</h3>

[![DevOps Skills](https://skillicons.dev/icons?i=gcp,cloudflare,nginx,git,github,githubactions,gitlab,ubuntu,grafana,prometheus)](https://skillicons.dev)

<h3 align="left">Frontend Skills</h3>

[![Frontend Skills](https://skillicons.dev/icons?i=next,react,tailwind,remix,materialui)](https://skillicons.dev)

<p><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=minglin1995&count_private=true&theme=ambient_gradient&hide_border=true" alt="minglin1995" /></p>
