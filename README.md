#git 명렁어
1. git add  - 새로운 파일 git 선택
2. git commit -m 버전 생성
3. git add . - 폴더 내 모든 파일 git 생성
4. git log - git 기록 보기
4-1. git log 이후 q - log 종료
5. git remote add - 저장소 주소 등록
6. git push(origin master) - 저장소 업로드
7. git clone url - 저장소 폴더 복사
8. git clone url . - 저장소 해당폴더에 풀기
9. git pull(origin master) - 저장소 다운로드(합치기)
10. git branch name - name 브랜치 생성
11. git checkout name - name 브랜치 이동 
12. git merge name - name 브랜치 를 통합

#GUI 이용
1. GUI 소스트리 사용해보기
2. 소스트리 사용시 push/pull error 시 저장소 설정 url id@url 로 변경해보기
3. banch 생성/이동
4. merge 합치기

#conflict
1. merge 할때 conflict 충돌 은 수동변경 하면 해결된다.


#fork 사용
1. github 에서 fork 이후 clone 함

#pull request (PR)


#브랜치 관리하기 
1. 보통 "feat/기능이름" 으로 한 사람이 개발하는 기능 브랜치를 만듭니다.(fix/버그이름, hotfix/급한버그)
2. 작업이 완료되면 dev(or master) 브랜치로 PR을 보냅니다.
3. dev 브랜치에서 큼지막한 작업이 모두 머지되면 release(or latest) 브랜치로 머지하고 이를 실서버에 배포 합니다.
4. 직접 커밋은 feat(혹은 fix, hotfix)브랜치에만 합니다.
5. dev나 master, release 브랜치에는 직접 커밋하지 말고 머지만 합니다.
