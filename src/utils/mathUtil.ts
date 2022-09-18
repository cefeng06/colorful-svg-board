
/**
 * 根据时间戳和随机数生成唯一id
 * @param length
 * @returns
 */
export function getUid(length: number) {
    return Number(Math.random().toString().substr(2, length) + Date.now().toString()).toString(36);
}