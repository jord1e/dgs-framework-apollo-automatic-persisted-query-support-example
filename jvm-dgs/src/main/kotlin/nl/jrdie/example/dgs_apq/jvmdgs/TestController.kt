package nl.jrdie.example.dgs_apq.jvmdgs

import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsQuery

@DgsComponent
class TestController {

    @DgsQuery
    fun testApq(): String {
        return "Hello APQ"
    }
}