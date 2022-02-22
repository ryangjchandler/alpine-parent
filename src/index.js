export default function (Alpine) {
    Alpine.magic('parent', (el, { Alpine }) => {
        return Alpine.mergeProxies(
            Alpine.closestDataStack(el).slice(1),
        )
    })
}
