class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[list[int]]:
        i:int = 0
        j:int = i+1
        results:list[list[int]] = []

        while (i < len(nums)):
            if (nums[i] > target):
                break

            print(f"Comparing nums[{i}]:")

            while (j < len(nums)):
                if (nums[j] > target):
                    break

                print(f"Comparing nums[{i}]: {nums[i]} with nums[{j}]: {nums[j]}")

                if (nums[i] + nums[j] == target):
                    print(f"Match found! nums[{i}] ({nums[i]}) + nums[{j}] ({nums[j]}) = ({target})")
                    results.append([i,j])
                j = j+1

            i = i+1
            j = i+1

        return results


sol1 = Solution().twoSum([1, 4, 6, 7, 9, 13, 16, 45], 10)
print(sol1)
