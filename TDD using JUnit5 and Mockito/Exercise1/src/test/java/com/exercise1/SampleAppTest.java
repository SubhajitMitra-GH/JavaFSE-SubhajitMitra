package com.exercise1;

import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class SampleAppTest {

    @Test
    public void testGetGreeting() {
        SampleApp app = new SampleApp();
        assertEquals("Hello World", app.getGreeting());
    }

    @Test
    public void testAdd() {
        SampleApp app = new SampleApp();
        assertEquals(5, app.add(2, 3));
    }
}
