const pkg = require('../package.json');
const parseVersion = (version,nameOverride)=>{
    const parts = version.split('.').map((part)=>parseInt(part));
    const [major,minor,patch] = parts;
    if(!nameOverride){
        nameOverride = `v${major}.${minor}.${patch}`;
    }

    const name = nameOverride == 'latest' || nameOverride == 'next' ? `${nameOverride}`: `v${major}.${minor}.${patch}`;
    const tag = name;
    const branch = name;
    return {
        version,
        name,tag,branch,
        major,
        minor,
        patch,
        prev: pkg.version,
        
        versions: {

            major: `${major+1}.0.0`,
            minor: `${major}.${minor+1}.0`,
            patch: `${major}.${minor}.${patch+1}`,
        },

        
    }
}
const current = parseVersion(pkg.version);

const versions = {
    ...current.versions,
    ...Object.keys(current.versions).reduce((acc,key)=>{
        const v = current.versions[key];
        acc[key] = parseVersion(v);
    },{})
}

const release = (options={
    kind: 'major',
    asNext: false,
    asLatest: true
})=>{
    const o={   kind: 'major',
    asNext: false,
    asLatest: true,
    ...options
}
let {asNext,kind,asLatest} = o;
if(!asNext && !asLatest){
    asNext= false;
    asLatest = true;
}
if(asNext){
    asLatest = false;
}
if(asLatest){
    asNext = false;
}

    const state = typeof versions[o.kind] != 'undefined' ? versions[o.kind] : versions.minor;
    const states= [
        state,
        asLatest ? {
            version: 'latest',
            name: 'latest',
            tag: 'latest',
            branch: 'latest',
        } : {
            version: 'next',
            name: 'next',
            tag: 'next',
            branch: 'next',
        }
    ]
    // return states;
    // const files = [{
    //     dest: '../package.json',
    //     content:($state)=>({...pkg,version: $state.version })
    // }]
    // states.forEach(()=>{
    //     files.forEach(({dest,content})=>{
            
    //     })
    // })
    // return {
    //     releases,
    //     files,
    //     state
    // }

}


// const createNext=(id='minor')=>{
//     const version = 
// }
// let current = parseVersion(pkg.version);

// const currentVersionName = pkg.version;
// let [major,minor,patch] = currentVersionName.split('.').map((n)=>parseInt(n));


// const getNext=(nextMajor=false,nextMinor=true,nextPatch=false)=>{
//     const nextParts = {
//         major: [major+1, 0, 0],
//         minor: [ major, minor+1, 0],
//         patch: [ major, minor, patch+1]
//     }
//     const parts = nextMajor ? nextParts.major : nextMinor ? nextParts.minor : nextParts.patch;
    
// }
// const next

// const prevMajor = major - 1 <
// const prev = parts.map(()=>{

// })
// const [nextMajor,nextMinor,nextRevision] = 
// const next = {
//     major: `${major+1}.0.0`,
//     minor: `${minor + 1 > 10}.${minor+1 > 10 ? 0}.0`,
//     revision: 0
// }
